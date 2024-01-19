
import { Card } from 'flowbite-react';
import React, { Button } from 'react';
import Logo from '../assets/logo.png'; 

import Food from '../assets/food1.png';
import  Cassava from '../assets/food3.png'; 
import Jollof from '../assets/jollof.png';
import {FaArrowCircleRight } from 'react-icons/fa';

const Menu =() =>  {
    const cardsData = [
        {
          imgSrc: Cassava,
          imgAlt: "Mere Noella Restaurant",
          title: "Mere Noella",
          description: "We serve Congolese foods such as Fumbwa, Pondu, Matembele, and many more.",
          link: "#",
        },
        {
          imgSrc: Jollof,
          imgAlt: "Dieuvie's Restaurant",
          title: "Dieuvie's",
          description: "We serve Congolese foods such as Fumbwa, Pondu, Matembele, and many more.",
          link: "#",
        },
        {
            imgSrc: Food,
            imgAlt: "Nancy's Restaurant",
            title: "Nancy Delicious",
            description: "We serve Congolese foods such as Fumbwa, Pondu, Matembele, and many more.",
            link: "#",
        },
        {
            imgSrc: Cassava,
            imgAlt: "Mere Noella Restaurant",
            title: "Mere Noella",
            description: "We serve Congolese foods such as Fumbwa, Pondu, Matembele, and many more.",
            link: "#",
        },
        {
            imgSrc: Cassava,
            imgAlt: "Mere Noella Restaurant",
            title: "Mere Noella",
            description: "We serve Congolese foods such as Fumbwa, Pondu, Matembele, and many more.",
            link: "#",
        },
        {
            imgSrc: Cassava,
            imgAlt: "Mere Noella Restaurant",
            title: "Mere Noella",
            description: "We serve Congolese foods such as Fumbwa, Pondu, Matembele, and many more.",
            link: "#",
        },
      ];
  return (

    <div className='px-4 lg:px-14 max-w-screen-2xl m-auto my-12 bg-white' id='menu'>
       <div className="text-center my-8">
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Restaurants
            </h2>

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
           {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        className='max-w-sm bg-tertiary transition-all 
                        duration-300 
                        hover:-translate-x-4'
                        imgSrc={card.imgSrc}
                        imgAlt={card.imgAlt}
                    >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {card.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {card.description}
                    </p>
                    <a href={card.link} className="text-link">
                        Learn more... <FaArrowCircleRight />
                    </a>
                    </Card>
                ))} 
        
        </div>
    </div>
   </div>
  );
}
export default Menu;
