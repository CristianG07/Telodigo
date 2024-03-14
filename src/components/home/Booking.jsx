import { mesage, phone_screen_only4, phone_screen_only4_mobile } from '../../utils/images'

export const Booking = () => {
  return (
    <section className='relative overflow-hidden text-white md:h-[40rem] flex flex-col-reverse md:flex-row gap-8'>
      <div className='md:w-[29%] bg-left_bg bg-no-repeat bg-cover md:bg-contain md:bg-fixed'>
        <div className='md:hidden pb-5'>
          <img src={phone_screen_only4_mobile} alt='phone_screen_only4_mobile' />
        </div>
      </div>
      <div className='w-full bg-darck_bg bg-cover pt-5 pb-10 overflow-hidden'>
        <div className='grid justify-center md:mt-24'>
          <div className='space-y-8 md:space-y-14'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
              <div className='w-14'>
                <img src={mesage} alt='mesage_icon' />
              </div>
              <div className='text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-[0.2em]'>
                <p>RESERVA EN TIEMPO REAL</p>
              </div>
            </div>
            <h3 className='text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-center max-w-[50%] mx-auto'>
              " PARA QUE NO PASES ROCHE DE TELO EN TELO "
            </h3>
          </div>
        </div>
      </div>
      <div className='hidden md:block  absolute -left-8 lg:left-[5%] 2xl:left-[11%] md:top-[8%] md:w-[28rem] lg:w-[35rem]'>
        <img src={phone_screen_only4} alt='phone_screen_only4' />
      </div>
    </section>
  )
}
