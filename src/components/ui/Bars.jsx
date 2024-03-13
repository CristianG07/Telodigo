import { MotionConfig, motion } from 'framer-motion'

export const Bars = ({ isOpenSidebar }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.2,
        ease: 'easeInOut'
      }}
    >
      <motion.button
        initial={false}
        animate={isOpenSidebar ? 'open' : 'closed'}
        className='relative h-20 w-20 rounded-full bg-white/0'
      >
        <motion.span
          variants={VARIANTS.top}
          className='absolute h-1 w-10 bg-white rounded-full'
          style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
        />

        <motion.span
          variants={VARIANTS.middle}
          className='absolute h-1 w-10 bg-white rounded-full'
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />

        <motion.span
          variants={VARIANTS.bottom}
          className='absolute h-1 w-10 bg-white rounded-full'
          style={{
            x: '-75%',

            y: '50%',

            bottom: '35%',

            left: 'calc(50% + 10px)'
          }}
        />
      </motion.button>
    </MotionConfig>
  )
}

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],

      top: ['35%', '50%', '50%']
    },

    closed: {
      rotate: ['45deg', '0deg', '0deg'],

      top: ['50%', '50%', '35%']
    }
  },

  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg']
    },

    closed: {
      rotate: ['-45deg', '0deg', '0deg']
    }
  },

  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],

      bottom: ['35%', '50%', '50%'],

      left: '62%'
    },

    closed: {
      rotate: ['45deg', '0deg', '0deg'],

      bottom: ['50%', '50%', '35%'],

      left: 'calc(50% + 10px)'
    }
  }
}
