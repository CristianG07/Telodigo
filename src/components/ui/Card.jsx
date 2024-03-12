import { battery } from '../../utils/images'

export const Card = ({title, text}) => {
  return (
    <div className='space-y-5 card '>
      <div className='flex flex-col lg:flex-row gap-1.5 text-center lg:text-start'>
        <div className='w-fit mx-auto lg:mx-0'>
          <img src={battery} alt='battery_icon' />
        </div>
        <h3 className='text-2xl'>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  )
}
