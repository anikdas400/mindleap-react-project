import {motion} from 'framer-motion'
import{fadeIn} from "../utilis/animationVariants"

const WorkingStep = () => {
    return (
        <div className="relative bg-cover bg-center py-12 bg-working-img ">
            <div className="absolute inset-0 bg-heroBg bg-opacity-80"></div>
            <motion.div 
            variants={fadeIn('up',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className="relative container mx-auto px-4 py-20">
                <div className="text-white text-center mb-20">
                    <h2 className="capitalize text-4xl font-bold font-secondary mb-4">how it works</h2>
                    <p className="text-lg md:w-1/2 w-full mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, deleniti aliquam. Blanditiis vitae, veniam cupiditate.</p>
                </div>

                {/* card section */}

                <div className="flex flex-col md:flex-row md:w-4/5 gap-8 mx-auto">
                    <div className="relative bg-white text-center rounded-lg p-6 flex-1 mb-4 md:mb-0">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">1</div>
                            <h3 className="text-lg font-medium mt-8 capitalize font-primary mb-3">fill a form</h3>
                            <p className="">Step 1 description goes here. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        
                    </div>
                    <div className="relative bg-white text-center rounded-lg p-6 flex-1 mb-4 md:mb-0">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">2</div>
                            <h3 className="text-lg font-medium mt-8 capitalize font-primary mb-3">get matched</h3>
                            <p className="">Step 2 description goes here. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        
                    </div>
                    <div className="relative bg-white text-center rounded-lg p-6 flex-1">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">3</div>
                            <h3 className="text-lg font-medium mt-8 mb-3 capitalize font-primary">schedule</h3>
                            <p className="">Step 3 description goes here. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default WorkingStep;