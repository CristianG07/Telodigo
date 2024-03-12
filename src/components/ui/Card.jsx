import { battery } from '../../utils/images'

export const Card = ({title, text}) => {
  return (
    <div className='bg-primary max-w-[22rem] px-5 pt-5 pb-7 rounded-xl space-y-5 shadow-2xl'>
      <div className='flex flex-col lg:flex-row gap-1.5 text-center'>
        <div className='w-fit mx-auto'>
          <img src={battery} alt='battery_icon' />
        </div>
        <h3 className='text-2xl'>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  )
}
