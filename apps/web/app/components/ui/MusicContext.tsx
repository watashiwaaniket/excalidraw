"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import useSound from "use-sound";

interface MusicContextType {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  stop: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [playSound, { pause: pauseSound, stop: stopSound }] = useSound(
    "/music/ethBgAudio.mp3",
    {
      loop: true,
      onplay: () => setIsPlaying(true),
      onend: () => setIsPlaying(false),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      soundEnabled: true,
      volume: 0.7,
    }
  );

  const play = useCallback(() => {
    playSound();
    setIsPlaying(true);
  }, [playSound]);

  const pause = useCallback(() => {
    pauseSound();
    setIsPlaying(false);
  }, [pauseSound]);

  const stop = useCallback(() => {
    stopSound();
    setIsPlaying(false);
  }, [stopSound]);

  return (
    <MusicContext.Provider value={{ isPlaying, play, pause, stop }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
};

