import { Routes, Route } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { Download, Error404, Home } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/download-app' element={<Download />} />
          <Route path='/error404' element={<Error404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
