import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLocation } from 'react-router-dom'

export const Subscription = () => {
  const form = useRef()
  const location = useLocation()
  const [showMessage, setShowMessage] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      await emailjs.sendForm(
        'service_xvhchud',
        'template_w991tqn',
        form.current,
        'ALa-nL2YYJAeMWV6r'
      )
      setShowMessage(true)
      setIsSubmitting(false)
      setTimeout(() => {
        setShowMessage(false)
      }, 5000)
      console.log(`¡Gracias por tu suscripción, cachorr@!`)
    } catch (error) {
      console.error('Error al enviar el correo:', error)
      setIsSubmitting(false)
    }
    e.target.reset()
  }

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1)
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <section id='subscription' className='text-white'>
      <div className='max-w-3xl lg:max-w-4xl px-3 mx-auto py-20 space-y-5'>
        <h2 className='text-3xl md:text-5xl text-center'>
          Suscríbete y obtén 15% menos en tu primera reserva
        </h2>
        <div>
          <form ref={form} onSubmit={sendEmail} className='space-y-8'>
            <div className='grid gap-3'>
              <label htmlFor='Email' className='ml-5'>
                Email *
              </label>
              <input
                className='px-7 py-5 focus:outline-none focus:ring-2 focus:ring-secondary rounded-full text-primary shadow-btn'
                type='email'
                name='Email'
                id='Email'
                placeholder='Email'
                required
              />
            </div>
            <div className='text-center'>
              <button
                className={`btn_primary hover:bg-primary hover:text-white px-10 py-3.5 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed shadow-none'
                    : ''
                }`}
                disabled={isSubmitting}
              >
                Suscribirse
              </button>
              {showMessage && (
                <p className='mt-8'>¡Gracias por tu suscripción, cachorr@!</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
