import { fadeIn } from '../../animations/Animations'
import { mobile_screens } from '../../utils/images'
import { Card } from '../ui/Card'
import { motion } from 'framer-motion'

export const Functions = () => {
  return (
    <section className='bg-center_gradian bg-center bg-cover lg:bg-auto pt-14 pb-24 lg:pt-20 lg:pb-48 text-white'>
      <div className='container_setions relative space-y-16'>
        <h3 className='text-2xl md:text-4xl text-center'>
          Descubre todas nuestras funciones...
        </h3>
        <div className='grid justify-center md:pl-5'>
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            variants={fadeIn('up', 0.70)}
            className='w-[80%]'
          >
            <img src={mobile_screens} alt='mobile_screens' />
          </motion.div>
        </div>
        <motion.div
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
          variants={fadeIn('right', 0.90)}
          className='hidden lg:block absolute top-[35%] left-[3.5%]'
        >
          <Card
            title={'Paga con tus apps favoritas'}
            text={
              'Podrás pagar con Yape, Plin, Tarjetas deb/cred o en Efectivo.'
            }
          />
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
          variants={fadeIn('right', 0.95)}
          className='hidden lg:block absolute top-[15%] right-[7.5%]'
        >
          <Card
            title={'Encuentra todo tipo de TELOS'}
            text={
              'En nuestra sección "Descubre" encontrarás una variedad de Telos según tus preferencias.'
            }
          />
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
          variants={fadeIn('right', 1)}
          className='hidden lg:block absolute  -bottom-[16%] left-[11.3%]'
        >
          <Card
            title={'Gana recompensas'}
            text={
              'Recibirás TELOcréditos según el número de reservas que tengas mediante nuestra app.'
            }
          />
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
          variants={fadeIn('right', 1)}
          className='hidden lg:block absolute -bottom-[3%] right-[12.1%]'
        >
          <Card
            title={'Guarda tus TELOS favoritos'}
            text={
              'Podrás añadir los TELOS que te vacilaron a nuestra sección "Favoritos".'
            }
          />
        </motion.div>
      </div>
    </section>
  )
}
