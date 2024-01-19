

import { Footer } from 'flowbite-react';
import Logo from '../assets/logo.png'
import { BsFacebook, BsInstagram} from 'react-icons/bs';
import {FaXTwitter ,FaLinkedin} from 'react-icons/fa6'

const FooterBar =()=> {
  return (
    <Footer container className='bg-[#A4A3A3]'>
      <div className="w-full my-4 ml-8 mr-12 rounded-md ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
          <div>
            <Footer.Brand
              href="/home"
              src={Logo}
              alt="Flowbite Logo"
              name="Bliss" 
              className="text-white"
              
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="about" className='text-white'/>
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#" > Learn more</Footer.Link>
                <Footer.Link href="/menu" >Our products</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Menu" className='text-white' />
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">Service</Footer.Link>
                <Footer.Link href="#">Products</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className='text-white'/>
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright  className='text-white' href="#" by="Bliss Corporate™" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className='text-white'/>
            <Footer.Icon href="#" icon={BsInstagram} className='text-white'/> 
            <Footer.Icon href="#" icon={FaXTwitter} className='text-white'/>
            <Footer.Icon href="#" icon={FaLinkedin} className='text-white'/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default FooterBar;