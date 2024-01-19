import React, { Component } from 'react';
import Logo from '../assets/logo.png';
import Food from '../assets/food1.png';
import  Cassava from '../assets/food3.png'; 
import Jollof from '../assets/jollof.png';
import { FaUsers, FaBuilding, FaHandshake } from 'react-icons/fa';

const Services =() =>  {
    const services = [
        {
          id: 1,
          icon: <FaUsers />,
          name: 'Community Engagement',
          description: 'Building strong connections within our community.'
        },
        {
          id: 2,
          icon: <FaBuilding />,
          name: 'Infrastructure Development',
          description: 'Creating sustainable and modern infrastructure.'
        },
        {
          id: 3,
          icon: <FaHandshake />,
          name: 'Partnership Building',
          description: 'Fostering partnerships for mutual growth and success.'
        }
      ];

    return (
      <div className='md:px-14 px-14 py-16 max-w-screen-2xl max-auto bg-white' id='service'>
       <div className="text-center my-8">
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'> Our Clients
            </h2>
            <p className='text-neutralGrey '> We have been working with some of the best restaurannt to deliver quality services</p>
       
            {/* The companies logo we are working with  */}
            <div className='px-4 flex items-center justify-between ml-20 lg:px-20 max-w-screen-2xl m-auto my-12 bg-white'>
                    <img src={Logo} alt="" className="h-16 w-18" /> 
                    <img src={Food} alt="" className="h-16 w-16" />
                    <img src={Cassava} alt="" className="h-16 w-16" />
                    <img src={Jollof} alt="" className="h-16 w-16" />
                    <img src={Food} alt="" className="h-16 w-16" />
                    <img src={Food} alt="" className="h-16 w-16" /> 
            </div> 
       </div>
        <div className="mt-20 md:w-1/2 mx-auto text-center">
            <h2 className='text-3xl text-brandPrimary font-semibold mb-2'> 
            Menage the entire community of a dedicated single system
            </h2>
            <p className='text-neutralGrey '> 
                We have been working with some of the best restaurannt to deliver quality services
            </p>
       
        </div>


        {/* Card display */}
<div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
    {
            services.map(service => 
                <div key={service.id} className='px-4 py-8 text-center 
                                                 md:w-[300px] mx-auto 
                                                 md:h-80 rounded-md 
                                                 shadow cursor-pointer 
                                                 hover:-translate-y-5 
                                                 hover:border-b-4
                                                 hover:border-other 
                                                 transition-all duration-300 
                                                 flex items-center 
                                                 justify-center h-full' >
                <div>
                <div className='bg-[#E8F5E9] mb-4 w-20 h-20 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center'>
                            <div className='text-4xl text-other'>{service.icon}</div>
                </div>

 
                    <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.name}</h4>
                    <p className='text-sm text-neutralGrey'>{service.description}</p>
                
                    
                    </div>
                </div>
         )
    }
</div>

    </div>
    ) 
}

export default Services;