import { ReactNode } from "react";
import { motion } from "motion/react";

export const NavButton = ({
  icon,
  onClick,
  activated,
}: {
  icon: ReactNode;
  onClick: () => void;
  activated: boolean;
}) => {
  return (
    <motion.button
      className={`bg-white p-3 rounded-full cursor-pointer hover:text-pink-500 ${activated ? "text-pink-500" : "text-neutral-600"}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring" }}
      onClick={onClick}
    >
      {icon}
    </motion.button>
  );
};
