import React from "react";
import { BentoGrid, BentoGridItem } from "../BentoGrid";
import { BrainCircuitIcon, Link2, Lock, Users } from "lucide-react";

export function Bento() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] my-16">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
          icon={item.icon}
          imageURL={item.imageURL}
        />
      ))}
    </BentoGrid>
  );
}

const iconClass = 'h-10 w-10 text-neutral-500'

const items = [
  {
    title: "Create Together, Instantly",
    description: "Draw and brainstorm in real time with zero lag.",
    className: "md:col-span-2",
    icon: <Users className={iconClass} />,
    imageURL: "/together.png"
  },
  {
    title: "Think Without Limits",
    description: "An infinite canvas with smart tools built for fast ideation.",
    className: "md:col-span-1",
    icon: <BrainCircuitIcon className={iconClass} />,
    imageURL: "/think.png"
  },
  {
    title: "Your Work, Always Safe",
    description: "Automatic cloud sync with full version history.",
    className: "md:col-span-1",
    icon: <Lock className={iconClass} />,
    imageURL: "/safe.png"
  },
  {
    title: "Share & Join in Seconds",
    description:
      "One link, no sign-up, works on any device.",
    className: "md:col-span-2",
    icon: <Link2 className={iconClass} />,
    imageURL: "/share.png"
  },
];
