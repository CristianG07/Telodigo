// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import {
  phone_screen_only1,
  phone_screen_only2,
  phone_screen_only3
} from '../../utils/images'
import { SlidePrevButton } from '../ui/SlidePrevButton'
import { SlideNextButton } from '../ui/SlideNextButton'

export const ImageSlide = () => {
  const screens_images = [
    { img: phone_screen_only1 },
    { img: phone_screen_only3 },
    { img: phone_screen_only2 }
  ]
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      loop={true}
      autoplay={true}
      pagination={true}
      speed={1000}
      slidesPerView={1}
      className='relative'
    >
      {screens_images.map((image, i) => (
        <SwiperSlide key={i}>
          <div className='px-10'>
            <img
              src={image.img}
              alt=''
              className='object-cover w-full h-full'
            />
          </div>
        </SwiperSlide>
      ))}
      <div className='absolute top-0 flex justify-between items-center w-full h-full'>
        <div className='z-10'><SlidePrevButton /></div>
        <div className='z-10'><SlideNextButton /></div>
      </div>
    </Swiper>
  )
}
