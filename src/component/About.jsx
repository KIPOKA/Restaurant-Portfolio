import React, { Component } from 'react';
import Logo from '../assets/logo.png';
import Food from '../assets/food1.png';
import  Cassava from '../assets/food3.png'; 
import Jollof from '../assets/jollof.png';
import { FaUsers, FaBuilding, FaHandshake } from 'react-icons/fa';

const About =() =>  {
    

    return (
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        
                <div >
                    <div >
                        <img src={Cassava} alt="" className="hover:animate-custom-bounce"/>
                    </div>
                </div>
                <div className="md:w-3/5 mx-auto">
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                        The unseen of testing nice food
                    </h2>
                    <p className='md:w-3/4 text-sm neutralGrey mb-8'>
                    Embark on a culinary journey where every bite tells a story.
                     Our kitchen is a realm of hidden treasures, a sanctuary where the 
                     alchemy of flavors and the artistry of presentation come together
                      to redefine your perception of exquisite dining. 
                    
                    </p>
                    <button className='btn-primary'>Contact Us!</button>
                </div>
                </div>
                
                <div className='rounded-corner'>
               
               
                    <div className="md:w-1/2 mx-auto">

                    <h2 className='text-4xl md:text-3xl text-black font-semibold mb-4 md:w-4/5'>
                        Helping small business to develop
                        </h2>
                        
                        
                        <p className='text-black text-sm md:text-base mb-4 md:w-4/5'>
                        Uncover the unseen delights of testing nice food, 
                        where each dish is a masterpiece waiting to be discovered.
                        </p>
                        
                        
                    </div>
                    </div>
                  

    </div>
    ) 
}

export default About;