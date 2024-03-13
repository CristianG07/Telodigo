import { Link, NavLink } from 'react-router-dom'

export const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <section
      className={`md:hidden absolute z-10 top-0 w-full h-screen text-white bg-primary ${
        isOpenSidebar ? 'opacity-100 visible' : 'opacity-0 invisible'
      } transition-all duration-500`}
    >
      <nav
        className={`gird justify-center text-center pt-16 space-y-8 ${
          isOpenSidebar
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        } transition-all duration-1000`}
      >
        <div>
          <NavLink
            to='/download-app'
            onClick={() => setIsOpenSidebar(false)}
            className={({ isActive }) =>
              `
              ${
                isActive && 'text-secondary'
              } text-2xl hover:text-secondary duration-500`
            }
          >
            DescargaFinal
          </NavLink>
        </div>
        <div>
          <Link
            to='/'
            onClick={() => setIsOpenSidebar(false)}
            className='btn_primary text-xl px-10 py-4 mx-auto'
          >
            Pre-Registro
          </Link>
        </div>
      </nav>
    </section>
  )
}
