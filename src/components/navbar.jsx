import { useState } from 'react'
import logo from '../assets/Logo.png';
import { GrLanguage } from 'react-icons/gr'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";




const navbar = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {

    setIsMenuOpen(!isMenuOpen);
  }

  const navItems = [
    { link: "overview", path: "home" },
    { link: "feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "pricing", path: "pricing" }

  ]


  return (
    <>
      <nav className='bg-white  md:px-14 p-4  max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
          <div className='flex space-x-14 items-center'>
            <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'> <img src={logo} alt="site logo" className='w-10 inline-block  items-center' /><span>BIXY</span></a>

            {/*showing navitems using map method*/}

            <ul className='md:flex space-x-12 hidden'>
              {
                navItems.map(({ link, path }) => <Link spy={true} activeClass="active" smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)

              }
            </ul>

          </div>

          {/* language and signup */}

          <div className='space-x-12 hidden md:flex items-center'>
            <a href="/" className=' hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2' /> Language</a>
            <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white  hover:bg-indigo-600'>sign-up</button>
          </div>

          {/* menu btn , only display on mobile*/}
          <div className='md:hidden '>
            <button onClick={toogleMenu} className='text-white  focus:outline-none focus:text-gray-300'>

              {
                isMenuOpen ? (< IoClose className="w-6 h-6 text-primary" />) : (< FaBars className="w-6 h-6 text-primary" />)
              }
            </button>

          </div >
        </div>

      </nav>
      {/*NavItem for mobile devices*/}
      <div className={`space-y-4 px-4  pb-5 bg-secondary text-xl lg:hidden  ${isMenuOpen ? "block fixed top-0  pt-24 right-0 left-0" : " hidden "}`}>
        {

          navItems.map(({ link, path }) => <Link spy={true} activeClass="active" smooth={true} offset={-90} key={link} to={path} className='block text-white hover:text-primary' onClick={toogleMenu}>{link}</Link>)

        }

      </div>
    </>
  )
}

export default navbar