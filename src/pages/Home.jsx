import { Booking } from '../components/home/Booking'
import { CardsMobile } from '../components/home/CardsMobile'
import { Functions } from '../components/home/Functions'
import { Hero } from '../components/home/Hero'
import { Subscription } from '../components/home/Subscription'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.6 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Booking />
      <Functions />
      <CardsMobile />
      <Subscription />
    </motion.div>
  )
}
