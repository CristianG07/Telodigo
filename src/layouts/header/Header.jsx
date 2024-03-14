import { useEffect, useState } from 'react'
import { logo } from '../../utils/images'
import { Bars } from '../../components/ui/Bars'
import { Link } from 'react-router-dom'
import { Sidebar } from '../../components/header/Sidebar'

export const Header = () => {
  const [isActiveScroll, setIsActiveScroll] = useState(false)
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsActiveScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`${
          isActiveScroll ? 'bg-primary shadow-header' : 'bg-transparent'
        } z-30 fixed left-0 top-0 w-full duration-500`}
      >
        <div className='container_header h-[4.5rem] flex items-center justify-between'>
          <Link to='/' className='w-48'>
            <img src={logo} alt='telodigo_logo' />
          </Link>
          <div>
            <button onClick={() => setIsOpenSidebar((prev) => !prev)} className='md:hidden relative z-20'>
              <Bars isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
            </button>
            <Link to='/#subscription' className='btn_primary py-1.5 hidden md:block mr-14'>
              Pre-Registro
            </Link>
          </div>
        </div>
      <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      </nav>
    </header>
  )
}
