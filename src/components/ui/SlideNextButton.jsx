import { useSwiper } from 'swiper/react'
import { GrFormNext } from 'react-icons/gr'

export const SlideNextButton = () => {
  const swiper = useSwiper()

  return (
    <button onClick={() => swiper.slideNext()}>
      <div className='w-4 fill-white rotate-180'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41"><path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path></svg>
      </div>
    </button>
  )
}
