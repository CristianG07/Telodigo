import { amex, diners, mastercard, paypal, visa } from "../../utils/images"

export const Footer = () => {
  const links_social = [
    {text: 'Instagram', link: 'https://www.instagram.com/telodigo.pe'},
    {text: 'Facebook', link: ''},
    {text: 'Twitter', link: ''},
    {text: 'Tiktok', link: ''}
  ]
  
  const payment_methods = [
    {img: visa},
    {img: mastercard},
    {img: amex},
    {img: diners},
    {img: paypal},
  ]
  return (
    <footer className="bg-footer bg-cover pt-6 pb-10 md:pb-16 text-sm border-t md:border-none text-white">
      <div className="md:w-[80%] max-w-6xl m-auto space-y-6">
        <div className="flex md:items-center justify-around md:justify-between">
          <div className="flex flex-col md:flex-row gap-1.5 md:gap-10">
            {links_social.map((social) => (
              <div key={social.text} className="hover:text-secondary duration-500">
                <a href={social.link} target="_blank">{social.text}</a>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-6">
            <p>Términos y condiciones</p>
            <p>Política de pivacidad</p>
          </div>
        </div>
        <div className="hidden md:block h-[2px] bg-white" />
        <div className="flex flex-col-reverse gap-5 md:flex-row items-center justify-between">
          <div>
            <p>© 2024 Creado por TELOdigoapp.site</p>
          </div>
          <div className="flex items-center gap-5">
            {payment_methods.map((payment, i) => (
              <div key={i}>
                <img src={payment.img} alt="payment_methods" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}