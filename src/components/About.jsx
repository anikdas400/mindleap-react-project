import React, { useState } from 'react';
import thumnailImg from '../assets/video-thumbnail.webp'
import { IoPlay } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaArrowCircleRight } from "react-icons/fa";

import {motion} from 'framer-motion'
import{fadeIn} from "../utilis/animationVariants"



const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoPlay = () => {
        setIsVideoPlaying(true)
    }

    const handleVideoclose = () => {
        setIsVideoPlaying(false)
    }
    return (

        <div id='about' className='bg-[#f7f8fc] pb-16 pt-20' >
            <motion.div
            variants={fadeIn('down',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
             className='container mx-auto'>
                <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-16'>
                    {/* left side */}
                    <div className='w-full md:w-1/2 mb-8 md:mb-0'>
                        {
                            !isVideoPlaying ? (
                                <div className='relative'>
                                    <img src={thumnailImg} alt="video thumnail " className='w-full md:h-[446px] object-cover h-auto rounded-lg' />
                                    <button
                                        onClick={handleVideoPlay}
                                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full shadow-lg cursor-pointer p-2'><IoPlay className='size-12 text-white' />
                                    </button>
                                </div>
                            ) : (null)
                        }

                    </div>
                    {/* right side */}

                    <div className='w-full md:w-1/2'>

                        <h2 className='capitalize text-2xl font-secondary font-bold mb-4 md:3/5 leading-snug'>individual consult and therapy</h2>
                        <p className='text-base mb-8 md:pr-8'>Dicta sunt explicabo.Nemo enim ipsam voluptas sit aspernatur out odit out fugit sed quia.Lorem ipsum is simply dummy text.</p>
                        <button className='bg-primary hover:bg-primary/70 text-white py-3.5 px-8 font-medium rounded-lg'>
                            <a href="#contact" className='flex gap-1 items-center'>
                                <span>Get Started</span>
                                <FaArrowCircleRight />
                            </a>
                        </button>
                    </div>

                </div>
                {
                    isVideoPlaying && (
                        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
                            <div className='relative w-full h-full flex items-center justify-center '>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/t0Q2otsqC4I?si=Wp2ae-FTAa5gN17U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <button onClick={handleVideoclose} className='absolute top-4 right-4 text-white text-2xl cursor-pointer'>
                                    <RxCross1 />
                                </button>
                            </div>
                        </div>
                    )
                }
            </motion.div>
        </div>

    );
};

export default About;
