import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// router dom
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
