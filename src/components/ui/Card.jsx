import { battery } from '../../utils/images'

export const Card = ({ title, text }) => {
  return (
    <div className='space-y-5 card'>
      <div className='flex flex-col lg:flex-row gap-1.5 text-center lg:text-start'>
        <div className='min-w-fit mx-auto lg:mx-0'>
          <div className='lg:w-10'>
            <img src={battery} alt='battery_icon' />
          </div>
        </div>
        <h3 className='text-2xl md:text-xl'>{title}</h3>
      </div>
      <p className='text-lg md:text-sm'>{text}</p>
    </div>
  )
}
