import React, { useLayoutEffect } from 'react'
import { Layout } from './layouts/Layout'
import { Download, Error404, Home } from './pages'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  const Wrapper = ({ children }) => {
    const location = useLocation()
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
    return children
  }

  return (
    <>
      <AnimatePresence mode='wait'>
        <Wrapper>
          <Routes location={location}>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/download-app' element={<Download />} />
              <Route path='/error404' element={<Error404 />} />
            </Route>
          </Routes>
        </Wrapper>
      </AnimatePresence>
    </>
  )
}

export default App
