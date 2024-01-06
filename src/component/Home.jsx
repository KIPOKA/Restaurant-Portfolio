import React, { useEffect, useState } from 'react' 
import Logo from '../assets/logo.png';
import Food from '../assets/food1.png';
import  Cassava from '../assets/food3.png';
import { Carousel } from 'flowbite-react';
import Jollof from '../assets/jollof.png';

const Home = ()=> {
    
  
    return (
        <div className='bg-neutralSilver'>
            <div className="px-2 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen ">
            <Carousel className='w-full mx-auto'>
                {/* The first transition  */}
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 "><div>
                    <img src={Logo} alt="" />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey md: w-3/4 leading-snug">
                        Try once and you will be addicted <span className='text-brandPrimary leadung-snug'>From 8 years of experience</span>
                    </h1>
                    <p className="text-neutralGrey text-base mb-8">
                        Where to grow your business as a 
                        restaurant: site or social media
                    </p> 
                    <button className='btn-primary'>
                        Register 
                    </button>
                </div>
                
                </div>

                {/* The second transition  */}
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 "><div>
                    <img src={Food} alt="" />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey md: w-3/4 leading-snug">
                    Explore the african food with all the flavours ! <span className='text-brandPrimary leadung-snug'>Support one and another</span>
                    </h1>
                    <p className="text-neutralGrey text-base mb-8">
                        Desire to save you
                    </p> 
                    <button className='btn-primary'>
                        Register 
                    </button>
                </div>
                
                </div>
                {/* The third transition  */}
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 "><div>
                    <img src={Jollof} alt="" />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey md: w-3/4 leading-snug">
                    Discover the Rich Tapestry of Flavors <span className='text-brandPrimary leadung-snug'>A Culinary Journey </span>
                    </h1>
                    <p className="text-neutralGrey text-base mb-8">
                    Through the Heart of Africa's Seas and Shores!
                    </p> 
                    <button className='btn-primary'>
                        Register 
                    </button>
                </div> 
                </div>

                {/* The third transition  */}
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 "><div>
                    <img src={Cassava} alt="" />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey md: w-3/4 leading-snug">
                    Harmony of the Horizon <span className='text-brandPrimary leadung-snug'>A Gastronomic Odyssey   </span>
                    </h1>
                    <p className="text-neutralGrey text-base mb-8">
                    Celebrating A Gastronomic Odyssey Celebrating Authentic African and Coastal Cuisines
                    </p> 
                    <button className='btn-primary'>
                        Register 
                    </button>
                </div>
                
                </div>
                
            </Carousel>
            </div>
        </div>
    )
  
}

export default Home