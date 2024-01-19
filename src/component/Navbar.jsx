import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import {FaXmark, FaBars} from 'react-icons/fa6'
import Login from '../authentication/Login';

const Navbar = ()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky]= useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    //set toggle menu 
    const toggleMenu=()=>{
            setIsMenuOpen(!isMenuOpen);
    }
    const toggleLogin = () => {
        setLoginOpen(!isLoginOpen);
      };

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY> 100){
                setIsSticky(true)
            }else{
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () =>{
            window.addEventListener('scroll', handleScroll);
        }
    });

    //Create a navigation array
    const navItems=[
        {link:"Home", path:"home"},
        {link:"Service", path:"service"},
        {link:"About", path:"about"},
        {link:"Menu", path:"menu"},  
        {link: 'Blog', path: "blog"},
        {link:"Contact", path:"contact"},
    ]
  
    return (
      <header className='w-full  md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky? "sticky top-0 left-0 right-0 border-b bg-white duration-300": ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="/" className='text-2xl font-semibold flex items-center sace-x-3'> 
                    <img src={Logo} alt="" className='w-10 inline-block items-center' />
                    <span className='text-[#263238] text-2xl'>Bliss</span></a>
                  
                    {/* Navigation items to get display */}
                   <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link, path}) =>
                                <Link  to={path}   spy={true}smooth={true} offset={-100} key={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>
                            )
                        }
                   </ul>

                   {/* Button for large devises */}

                   <div className='space-x-12 hidden lg:flex items-center'>
                    <button className='hidden lg:flex items-center  font-bold text-xl text-other hover:text-gray900 curser-pointer'>Login</button>
                            

                              <button 
                    className='bg-other text-white 
                                py-2 px-4 transition-all 
                                duration-300 rounded
                                hover:bg-neutralDGrey'
                    >
                        Sign Up
                        
                    </button>
                   </div> 

                   {/* For mobile devices */}
                   <div className='md:hidden'>
                        <button 
                            onClick={toggleMenu}
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                                {
                                    isMenuOpen? (<FaXmark className='h-6 w-6' />):(<FaBars className='h-6 w-6'/>)
                                }
                        </button>

                   </div>

                </div>
                <div className={`space-y-4 px-4 mt-16 py-7 bg-white ${isMenuOpen? "block fixed top-0 right-0 left-0": "hidden"}`}>
                {
                            navItems.map(({link, path}) =>
                                <Link  to={path}   
                                        spy={true}
                                        smooth={true}
                                        offset={-100} 
                                        key={path} 
                                        className='block text-base 
                                                    text-gray900 
                                                    hover:text-brandPrimary 
                                                    first:font-medium'
                                >
                                    {link}
                                </Link>
                            )
                        }
                </div>
            </nav>
            
      </header>


                        
    ) 
}

export default Navbar