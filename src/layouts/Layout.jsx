import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// components
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

export const Layout = () => {
  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <Outlet />
      </AnimatePresence>
      <Footer />
    </>
  )
}
