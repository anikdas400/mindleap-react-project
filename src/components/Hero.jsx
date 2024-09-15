import React from 'react';
import heroImg from "../assets/hero.webp"
import { FaArrowCircleRight } from "react-icons/fa";

import {motion} from 'framer-motion'
import{fadeIn} from "../utilis/animationVariants"


const Hero = () => {
    return (
        <section id='home' className=' bg-heroBg text-white flex  items-center pt-28 md:h-screen'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-4 h-full'>
                {/* left side */}
                <motion.div
                variants={fadeIn('down',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                className='md:w-1/2 md:pt-24 ' >
                    <h2 className='text-4xl font-secondary font-bold mb-4 md:3/5 leading-snug'>Start Your Journey to <br /> Mental Welness</h2>
                    <p className='text-lg mb-12 md:pr-8'>We lower our stress levels,we get to know our pain,we connect better,we improve our focus,and we're kinder to ourselves.Let us walk you through the basics in our new mindful guide on how to meditate.</p>
                    <button className='bg-primary hover:bg-primary/70 text-white py-3.5 px-8 font-medium rounded-lg'>
                        <a href="#contact" className='flex gap-1 items-center'>
                            <span>Get Started</span>
                            <FaArrowCircleRight />
                        </a>
                    </button>
                </motion.div>
                {/* right side */}
                <motion.div 
                variants={fadeIn('left',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                className='md:w-1/2 h-full'>
                    <img src={heroImg} alt="hero image" className='w-full object-cover' />
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;