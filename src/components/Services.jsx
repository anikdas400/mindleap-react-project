import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import service4 from '../assets/service4.webp'

import {motion} from 'framer-motion'
import{fadeIn} from "../utilis/animationVariants"



const Services = () => {
    return (
        <div className='bg-[#f7f8fc]' id='services'>
            <div className='pt-28 px-4 container mx-auto ' >
                <motion.div 
                variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                className="text-center space-y-5">
                    <h2 className="text-4xl font-bold font-secondary text-heroBg">What Can We Do Together</h2>
                    <p className="md:w-1/2 mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius temporibus fugiat aliquam, nam vero esse. Ratione nam consequuntur a doloribus iste cum deserunt possimus voluptatem.</p>
                </motion.div>
                <div className="py-12 w-4/5 mx-auto">
                    <Tabs>
                        <motion.TabList 
                        variants={fadeIn('up',0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.7}}
                        className="flex flex-wrap justify-between items-center gap-4 md:gap-8">
                            <Tab>Couple Counseling</Tab>
                            <Tab>Parenting Skills</Tab>
                            <Tab>Feeling Stuck</Tab>
                            <Tab>Self-Confidence</Tab>
                        </motion.TabList>

                        <TabPanel>
                            <motion.div
                            variants={fadeIn('up',0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.7}}
                             className='flex flex-col md:flex-row mt-10 gap-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary '>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counseling</h3>
                                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores neque in modi sequi rerum commodi vero exercitationem, pariatur veritatis, possimus dolor. Illo consectetur ab veritatis?</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefites</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                    </ul>

                                </div>
                                <div className='md:w-1/2'>
                                    <img src={service1} alt="service image" className='rounded-2xl w-full h-auto object-cover' />
                                </div>
                            </motion.div>
                        </TabPanel>
                        <TabPanel>
                        <motion.div
                        variants={fadeIn('up',0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.7}} className='flex flex-col md:flex-row mt-10 gap-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary '>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
                                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores neque in modi sequi rerum commodi vero exercitationem, pariatur veritatis, possimus dolor. Illo consectetur ab veritatis?</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefites</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                    </ul>

                                </div>
                                <div className='md:w-1/2'>
                                    <img src={service2} alt="service image" className='rounded-2xl w-full h-auto object-cover' />
                                </div>
                            </motion.div>
                        </TabPanel>
                        <TabPanel>
                        <motion.div
                        variants={fadeIn('up',0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.7}} className='flex flex-col md:flex-row mt-10 gap-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary '>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
                                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores neque in modi sequi rerum commodi vero exercitationem, pariatur veritatis, possimus dolor. Illo consectetur ab veritatis?</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefites</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                    </ul>

                                </div>
                                <div className='md:w-1/2'>
                                    <img src={service3} alt="service image" className='rounded-2xl w-full h-auto object-cover' />
                                </div>
                            </motion.div>
                        </TabPanel>
                        <TabPanel>
                        <motion.div
                        variants={fadeIn('up',0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.7}} className='flex flex-col md:flex-row mt-10 gap-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary '>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Self-Confidence</h3>
                                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores neque in modi sequi rerum commodi vero exercitationem, pariatur veritatis, possimus dolor. Illo consectetur ab veritatis?</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefites</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Understanding Relationship Dynamics</li>
                                    </ul>

                                </div>
                                <div className='md:w-1/2'>
                                    <img src={service4} alt="service image" className='rounded-2xl w-full h-auto object-cover' />
                                </div>
                            </motion.div>
                        </TabPanel>
                    </Tabs>
                </div>

            </div>
        </div>
    );
};

export default Services;