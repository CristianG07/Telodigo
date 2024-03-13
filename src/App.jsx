import { Layout } from './layouts/Layout'
import { Download, Error404, Home } from './pages'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location}>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/download-app' element={<Download />} />
            <Route path='/error404' element={<Error404 />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
