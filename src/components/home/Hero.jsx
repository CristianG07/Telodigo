import { Link } from 'react-router-dom'
import { mobile_stores, phone_screen_hero, phone_screen_only1 } from '../../utils/images'

export const Hero = () => {
  return (
    <section className='bg-hero bg-center bg-cover text-white'>
      <div className='container_setions pt-20 pb-14 lg:pb-28 flex flex-col-reverse md:flex-row lg:justify-between items-center gap-5'>
        <div className='text-center md:text-start lg:mt-32 flex-shrink-0'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl lg:leading-[4.5rem] font-bold'>HOSTALES POR <br /> HORAS</h2>
          <p className='text-xl mb-7 lg:mb-5'>Más cercanos a ti...</p>
          <Link className='btn_primary px-7 py-3' to='/download-app'>DOWNLOAD</Link>
        </div>
        <div className='flex-1 md:flex-none md:w-[55%] lg:w-[47%] lg:translate-x-20 mt-5 lg:mt-0 overflow-hidden'>
          <div className='relative w-full'>
            <div className='absolute w-full left-[2.5%] top-[40%] h-full'>
              <div className='w-[50%]'>
                <img src={mobile_stores} alt='mobile_stores' />
              </div>
            </div>
            <div className='-rotate-[20deg]'>
              <img src={phone_screen_hero} alt='phone_screen_hero' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
