import React from "react";
import { BentoGrid, BentoGridItem } from "../BentoGrid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Bento() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] my-16">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Collaboration = () => (
  <img src={'/brainstorm.png'} alt="brainstorm"/>
)

const InfiniteCanvas = () => (
  <img src="/infiniteCanvas.png" alt="infiCanvas"/>
)

const Safe = () => (
  <img src="/safeWork.png" alt="safe" className="h-full w-full"/>
)

const ShareLink = () => (
  <img src="/shareLink.png" alt="share" className="w-full"/>
)

const items = [
  {
    title: "Create Together, Instantly",
    description: "Draw and brainstorm in real time with zero lag.",
    header: <Collaboration />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Think Without Limits",
    description: "An infinite canvas with smart tools built for fast ideation.",
    header: <InfiniteCanvas />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Your Work, Always Safe",
    description: "Automatic cloud sync with full version history.",
    header: <Safe />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Share & Join in Seconds",
    description:
      "One link, no sign-up, works on any device.",
    header: <ShareLink />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
