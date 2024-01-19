

import React from 'react'; 
import  Cassava from '../assets/okra.jpeg'; 
import Chicken from '../assets/chicken.jpeg';

import {FaArrowCircleRight} from 'react-icons/fa';

const Blog = () =>{

    const blogs = [
        {
          id:1,
          imgSrc: Cassava,
          imgAlt: "Okra veg",
          title: "Okra Veg",
          description: "We serve Congolese foods such as Fumbwa, Pondu, Matembele, and many more.",
          link: "#",
        }, 
          {
            id:4,
            imgSrc: Chicken,
            imgAlt: "Mere Noella Restaurant",
            title: "Chicken salad",
            description: "We serve Congolese foods such as Fumbwa, Pondu, Matembele, and many more.",
            link: "#",
          },{
            id:5,
            imgSrc: Cassava,
            imgAlt: "Mere Noella Restaurant",
            title: "Mere Noella",
            description: "We serve Congolese foods such as Fumbwa, Pondu, Matembele, and many more.",
            link: "#",
          }
      ];
  
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl m-auto my-12 bg-white mb-20' id='blog'>
        <div className='text-center md:w-1/2 mx-auto'>
           
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 mt-8'>
                        The unseen of testing nice food
                    </h2>
        
        
                    <p className='text-xl neutralGrey mb-8 md:w-5/6 mx-auto '>
                    Embark on a culinary journey where every bite tells a story.
                     Our kitchen is a realm of hidden treasures, a sanctuary where the 
                     alchemy of flavors and the artistry of presentation come together
                      to redefine your perception of exquisite dining. 
                    </p>
        </div>
        {/* All blogs  */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {blogs.map((blog) => (
                    <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                            <img
                                src={blog.imgSrc}
                                alt={blog.imgAlt}
                                className='rounded-md hover:scale-95 transition-all duration-300'
                            />
                            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                                <h3 className='text-center px-4 py-8 bg-white'>{blog.title}</h3>
                                <p className='font-normal text-gray-700 dark:text-gray-400'>
                                {blog.description}
                                </p>
                                <a href={blog.link} className='text-link'>
                                Learn more... <FaArrowCircleRight />
                                </a>
                            </div>
                    </div>
                ))}
        </div>
     
    </div>
  );
};
export default Blog;
