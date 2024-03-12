import { useEffect, useState } from 'react'
import { logo } from '../../utils/images'
import { Bars } from '../../components/ui/Bars'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isActiveScroll, setIsActiveScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setIsActiveScroll(true) : setIsActiveScroll(false)
    })
  }, [])

  return (
    <header
      className={`${
        isActiveScroll ? 'bg-primary shadow-xl' : 'bg-transparent'
      } z-50 fixed left-0 top-0 w-full duration-700`}
    >
      <div className='container_header h-20 flex items-center justify-between'>
        <div className='w-48'>
          <img src={logo} alt='telodigo_logo' />
        </div>
        <div className=''>
          <div className='md:hidden'>
            <Bars />
          </div>
            <Link className='btn_primary py-1.5 hidden md:block mr-14'>Pre-Registro</Link>
        </div>
      </div>
    </header>
  )
}
