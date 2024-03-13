import { Card } from '../ui/Card'

export const CardsMobile = () => {
  return (
    <section className='lg:hidden grid md:grid-cols-2 justify-items-center mx-auto gap-10 text-white'>
      <div>
        <Card
          title={'Paga con tus apps favoritas'}
          text={'Podrás pagar con Yape, Plin, Tarjetas deb/cred o en Efectivo.'}
        />
      </div>
      <div>
        <Card
          title={'Encuentra todo tipo de TELOS'}
          text={
            'En nuestra sección "Descubre" encontrarás una variedad de Telos según tus preferencias.'
          }
        />
      </div>
      <div>
        <Card
          title={'Gana recompensas'}
          text={
            'Recibirás TELOcréditos según el número de reservas que tengas mediante nuestra app.'
          }
        />
      </div>
      <div>
        <Card
          title={'Guarda tus TELOS favoritos'}
          text={
            'Podrás añadir los TELOS que te vacilaron a nuestra sección "Favoritos".'
          }
        />
      </div>
    </section>
  )
}
