export const fadeLeftTransition = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -200,
  },
};

export const fadeRightTransition = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 200,
  },
};

export const opacityTransition = (animateOpacity = 1) => {
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
