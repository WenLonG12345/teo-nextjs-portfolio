import { SlideFade } from "@chakra-ui/react";
import { MotionBox } from "../motion";

interface Props {
  children: React.ReactNode;
}

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const staggerVariants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 }
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const PageSlideFade = ({ children }: Props) => {
  return <SlideFade in>{children}</SlideFade>;
};

export const StaggerChildren = ({ children }: Props) => {
  return (
    <MotionBox
      animate={{
        opacity: 1,
        translateY: 0
      }}
      variants={staggerVariants}
    >
      {children}
    </MotionBox>
  );
};