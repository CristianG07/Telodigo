export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.9,
        delay: delay,
        ease: [0.05, 0.05, 0.25, 0.75]
      }
    }
  }
}

export const fadeInHero = {
  hidden: {
    opacity: 0,
    translateX: 200,
    translateY: -250,
    rotate: 85
  },
  show: {
    opacity: 1,
    translateX: 0,
    translateY: 0,
    rotate: 0,
    transition: {
      duration: 1.10,
      delay: 1,
      ease: [0.05, 0.15, 0.35, 0.75]
    }
  }
}
