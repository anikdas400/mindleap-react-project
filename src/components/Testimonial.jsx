import React from 'react';
import { BsFillChatQuoteFill } from "react-icons/bs";

import {motion} from 'framer-motion'
import{fadeIn} from "../utilis/animationVariants"

import review1 from '../assets/review1.webp'
import review2 from '../assets/review2.webp'

const Testimonial = () => {
    const testimonials = [
        {
            name: 'Jane Doe',
            location: 'New York, NY',
            review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!',
            image: review1,
        },
        {
            name: 'John Smith',
            location: 'Los Angeles, CA',
            review: 'I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.',
            image: review2,
        },
    ]
    return (

        <div id='testimonial' className='bg-[#f7f8fc] pb-20 py-12 px-10 md:px-0' >
            <motion.div 
            variants={fadeIn('down',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className='container mx-auto'>
                <div className="text-center mb-16">
                    <h2 className="capitalize text-4xl font-bold font-secondary mb-4">what our clients say</h2>
                    <p className="text-lg md:w-1/2 w-full mx-auto">Here from some of our satisfied clients about how our services have positively impacted their lives and well-being.</p>
                </div>
                <div className='flex flex-col md:flex-row md:w-4/5 mx-auto gap-8 md:gap-12'>
                    {
                        testimonials.map((testimonial, index) => (
                            <div key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                                <div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2'><BsFillChatQuoteFill className='size-10 text-primary' />
                                </div>
                                <div className='flex flex-col space-y-3'>
                                    <p className='text-lg mb-2'>{testimonial.review}</p>

                                    <div className='flex gap-1'>
                                    <img src={testimonial.image} alt="reviewer image" className='size-16 rounded-full object-cover mr-4' />
                                    <div>
                                        <p className='font-semibold mb-2'>{testimonial.name}</p>
                                        <p className='text-gray-600'>{testimonial.location}</p>
                                    </div>
                                </div>
                                </div>
                               

                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </div>

    );
};

export default Testimonial;