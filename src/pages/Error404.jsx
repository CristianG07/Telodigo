import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { error } from '../utils/images'

export const Error404 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.6 }}
      exit={{ opacity: 0 }}
      className='py-28 flex items-center h-screen text-white'
    >
      <div className='container_setions flex flex-col lg:flex-row items-center justify-center '>
        <div className='min-w-fit'>
          <img className='aspect-[415/286]' src={error} alt='error' />
        </div>
        <div className='md:max-w-xl mx-auto space-y-7'>
          <div className='space-y-5'>
            <h2 className='lg:text-start font-medium text-3xl md:text-5xl leading-tight'>
              Te avisaremos cuando la app esté lista para descargar
            </h2>
            <p>
              Gracias por tu paciencia... Porque lo bueno, sabroso y sexoso se
              hace esperar.
            </p>
          </div>
          <div className='text-center'>
            <Link
              to='/'
              className='btn_primary hover:border hover:border-secondary hover:text-secondary hover:bg-primary rounded-lg px-9 shadow-none py-2.5'
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
