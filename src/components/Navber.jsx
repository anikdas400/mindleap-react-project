import { useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion"

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    const handleCloseMenu = () => {
        setIsOpen(false)
    }
    const handleScroll = () => {
        const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    setActiveSection(section)
                }
            }
        })

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    const navLinks = (
        <ul

            className='font-medium flex flex-col md:flex-row space-x-4 lg:space-x-8 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('home')
                    }}
                     href="#home"
                    className={`text-white ml-3 ${activeSection === "home" ? "isActive" : ""}`}
                >Home</motion.a>
                </li>
            <li>
                <motion.a href="#services"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('services')
                }}
                     className={`text-white ${activeSection === "services" ? "isActive" : ""}`}>Services</motion.a></li>
            <li>
                <motion.a href="#about"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('about')
                }}
                    className={`text-white ${activeSection === "about" ? "isActive" : ""}`}>About us</motion.a></li>
            <li>
                <motion.a href="#pricing"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('pricing')
                }}
                    className={`text-white ${activeSection === "pricing" ? "isActive" : ""}`}>Pricing</motion.a></li>
            <li>
                <motion.a href="#testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('testimonial')
                }}
                    className={`text-white ${activeSection === "testimonial" ? "isActive" : ""}`}>Testimonial</motion.a></li>
        </ul>
    )
    return (
        <header className='bg-heroBg text-white fixed py-6 px-4 left-0 right-0 z-10'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                {/* logo */}
                <div>
                    <a href="/">
                        <img className='' src="/public/logo.svg" alt="mindleap logo" />
                    </a>
                </div>

                {/* nav items */}

                <div className='hidden md:flex flex-grow justify-center'>
                    {navLinks}
                </div>

                {/* button */}
                <div className='hidden md:block'>
                    <a className='bg-primary hover:bg-primary/95 py-2 px-3 rounded-lg shadow-lg' href="#contact"
                    onClick={(e) => { 
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('contact'); }}>Contact Us</a>
                </div>
                {/* hamberg menu */}
                <div className='block md:hidden'>
                    <button
                        onClick={handleToggle}
                        className={`text-white focus:outline-none ${isOpen ? "border border-white " : ""}`}>
                        <HiOutlineMenuAlt3 className='size-6' />
                    </button>
                </div>
            </div>

            {/* moblie nav item */}

            {
                isOpen && (
                    <nav className='absolute top-full w-full left-0 bg-heroBg z-20 md:hidden'>
                        <ul className='flex flex-col p-4 space-x-3'>
                            {navLinks.props.children}
                            <li className='mt-4'>
                                <a href="#contact"
                                    onClick={(e) => { 
                                    e.preventDefault();
                                    handleCloseMenu();
                                    handleScrollTo('contact'); }}
                                    className='bg-primary text-white hover:bg-primary/95 py-2 px-3 rounded-lg shadow-lg'>Contact Us</a>

                            </li>
                        </ul>

                    </nav>
                )
            }

        </header>
    );
};

export default Navber;