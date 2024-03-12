import { mobile_screens } from '../../utils/images'
import { Card } from '../ui/Card'

export const Functions = () => {
  return (
    <section className='bg-center_gradian bg-center bg-cover pt-28 pb-5 lg:pb-48 text-white'>
      <div className='container_setions relative space-y-16'>
        <h3 className='text-2xl md:text-4xl text-center'>
          Descubre todas nuestras funciones...
        </h3>
        <div className='grid justify-center'>
          <div className='w-[85%]'>
            <img src={mobile_screens} alt='mobile_screens' />
          </div>
        </div>
        <div className='hidden lg:block absolute top-[35%] -left-[1%]'>
          <Card
            title={'Paga con tus apps favoritas'}
            text={
              'Podrás pagar con Yape, Plin, Tarjetas deb/cred o en Efectivo.'
            }
          />
        </div>
        <div className='hidden lg:block absolute top-[15%] right-[2%]'>
          <Card
            title={'Encuentra todo tipo de TELOS'}
            text={
              'En nuestra sección "Descubre" encontrarás una variedad de Telos según tus preferencias.'
            }
          />
        </div>
        <div className='hidden lg:block absolute  -bottom-[16%] left-[8%]'>
          <Card
            title={'Gana recompensas'}
            text={
              'Recibirás TELOcréditos según el número de reservas que tengas mediante nuestra app.'
            }
          />
        </div>
        <div className='hidden lg:block absolute bottom-0 right-[7%]'>
          <Card
            title={'Guarda tus TELOS favoritos'}
            text={
              'Podrás añadir los TELOS que te vacilaron a nuestra sección "Favoritos".'
            }
          />
        </div>
      </div>
    </section>
  )
}
