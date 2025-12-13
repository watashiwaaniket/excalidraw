import { motion, useAnimation } from "motion/react";

interface NavButtonProps{
    label : string;
    onClick ?: () => void;
}

export default function NavButton({label, onClick} : NavButtonProps) {

    const controls = useAnimation();

    const handleTap = async () => {
        await controls.start({
        scale: [1, 0.96, 1.02, 1],
        transition: { duration: 0.4, ease: "easeInOut" },
        });
        if (onClick) onClick();
    };

    return(
        <motion.button 
            className="px-6 py-1 bg-neutral-100 rounded-2xl cursor-pointer"
            onClick={handleTap}
            animate={controls}
            whileHover={{padding: "6px 30px"}}
            transition={{ duration: 1, bounce: 0.6, type: "spring" }}
        >
            {label}
        </motion.button>
    )
};
