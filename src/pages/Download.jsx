import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageSlide } from '../components/download/ImageSlide'
import { app_store, google_play } from '../utils/images'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export const Download = () => {
  const navigate = useNavigate()
  const options = ['Trujillo', 'Chiclayo', 'Lima', 'Arequipa']
  const [isOpen, setIsOpen] = useState(false)

  const toggleSelect = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/error404');
  };
  return (
    <section className='bg-primary text-white pt-36 pb-16'>
      <div className='container_setions flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20 h-full'>
        <div className='md:w-[70%] lg:w-[40%] space-y-5'>
          <h2 className='text-4xl text-center lg:text-start lg:text-5xl leading-tight'>
            Ingresa el nombre de tu ciudad actual
          </h2>
          <p>
            Selecciona el nombre de la ciudad donde te encuentras viviendo
            actualmente para comenzar a usar la aplicación.
          </p>
          <form onSubmit={handleSubmit} className='flex flex-col items-center md:flex-row md:items-end gap-10'>
            <div className='w-full'>
              <label htmlFor='ciudad'>Ciudad *</label>
              <div className='relative text-primary'>
                <select
                  name='ciudad'
                  id='ciudad'
                  className='w-full py-2 px-3 rounded-md appearance-none'
                  onClick={toggleSelect}
                  required
                >
                  <option hidden={true} value=''>
                    Elige una opción
                  </option>
                  {options.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                  {isOpen ? (
                    <MdKeyboardArrowDown size={20} />
                  ) : (
                    <MdKeyboardArrowUp size={20} />
                  )}
                </div>
              </div>
            </div>
            <button className='btn_primary px-10 py-3 lg:px-5 lg:py-2'>Download</button>
          </form>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='w-full max-w-[20rem] lg:max-w-[23rem] mx-auto'>
            <ImageSlide />
          </div>
          <div className='w-full flex flex-row-reverse md:flex-col items-center gap-3'>
            <div>
              <img src={google_play} alt='google_play' />
            </div>
            <div>
              <img src={app_store} alt='app_store' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
