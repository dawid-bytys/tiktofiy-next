export const useOpacityTransition = (animateOpacity = 1) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: animateOpacity,
    },
    exit: {
      opacity: 0,
    },
  };
};
