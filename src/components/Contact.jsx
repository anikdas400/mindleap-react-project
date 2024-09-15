import { useState } from "react";
import { FaEnvelope, FaUserAlt, FaPhoneAlt, FaGlobe } from "react-icons/fa";

import {motion} from 'framer-motion'
import{fadeIn} from "../utilis/animationVariants"


const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [message, setMessage] = useState("")
    const [showModal, setShowModal] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            country,
            message
        }
        // console.log(data)

        if (!data) {
            alert("Please fill all fields")
            return
        }else(setShowModal(true))
        
    }
    const closeModal = () => {
        setShowModal(false)
        setName("")
        setEmail("")
        setPhone("")
        setCountry("")
        setMessage("")
        

    }
    return (
        <div id="contact" className="bg-heroBg flex items-center justify-center py-28 px-6">

            <div className="container mx-auto ">
                <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 text-white">
                    {/* left side */}
                    <motion.div 
                    variants={fadeIn('down',0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className="space-y-8">
                        <h2 className="text-4xl font-bold font-secondary mb-4 ">Make an appointment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4 ">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                    <FaUserAlt className="text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-medium">24 Hours Services</h3>
                                    <p className="text-base">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 ">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                    <FaEnvelope className="text-primary" />

                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-medium">Expert Therapist</h3>
                                    <p className="text-base">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 ">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">

                                    <FaPhoneAlt className="text-primary" />

                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-medium">High Quality Core</h3>
                                    <p className="text-base">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 ">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">

                                    <FaGlobe className="text-primary" />

                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-medium">Trusted Clinic</h3>
                                    <p className="text-base">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* right side-- form */}
                    <motion.div 
                    variants={fadeIn('left',0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className="space-y-8 p-8 bg-white shadow-lg rounded-md">
                        <h2 className="text-3xl font-bold mb-5 text-black text-center">Book Appointment</h2>
                        <form onSubmit={handleSubmit} className="space-y-8 text-black">
                            <div className="flex sm:flex-row flex-col gap-4">
                                <input onChange={e => setName(e.target.value)} type="text" placeholder="Name" required className="w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow p-2" />
                                <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email Address" required className="w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow p-2" />
                            </div>
                            <div className="flex sm:flex-row flex-col gap-4">
                                <input onChange={e => setPhone(e.target.value)} type="text" placeholder="Contact Number" required className="w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow p-2" />
                                <input onChange={e => setCountry(e.target.value)} type="tel" placeholder="Country" required className="w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow p-2" />
                            </div>
                            <textarea onChange={e => setMessage(e.target.value)} rows="5" placeholder="Write your message..." className="w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow p-2"></textarea>
                            <button type="submit" className="w-full bg-primary text-white hover:bg-primary/80 p-3 rounded-lg">Sent Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Modal part */}
            {
                showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-heroBg bg-opacity-90">
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                            <p>Thank you {name} for submiting your query.</p>
                            <button
                            onClick={closeModal}
                             className="mt-4 px-4 py-2 bg-red-500 rounded-lg">
                                Close
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Contact;