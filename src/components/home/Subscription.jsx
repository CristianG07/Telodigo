export const Subscription = () => {
  return (
    <section id="subscription" className='bg-primary text-white'>
      <div className='max-w-3xl lg:max-w-4xl px-3 mx-auto py-20 space-y-5'>
        <h2 className='text-3xl md:text-5xl text-center'>
          Suscríbete y obtén 15% menos en tu primera reserva
        </h2>
        <div>
          <form className='space-y-5'>
            <div className='grid gap-3'>
              <label htmlFor='Email' className='ml-5'>
                Email *
              </label>
              <input
                className='px-7 py-5 rounded-full text-primary shadow-btn'
                type='text'
                name='Email'
                id='Email'
                placeholder='Email'
                required
              />
            </div>
            <div className="text-center">
              <button className='btn_primary hover:bg-primary hover:text-white px-10 py-3.5'>
                Suscribirse
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
