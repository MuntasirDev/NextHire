import React, { useRef } from 'react';
import LottieWrapper from 'lottie-react';
import { motion } from 'framer-motion';
import AboutLottie from '../../assets/Lotties/Business team.json';
import officeImage from '../../assets/Images/Office1.jpg'; 
import Faq from '../FAQ/Faq';

const Lottie = LottieWrapper.default || LottieWrapper;

const AboutUs = () => {
    const faqRef = useRef(null);

    const scrollToFaq = () => {
        faqRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white">
            {/* --- Hero Section --- */}
            <div className="min-h-screen flex items-center py-20 px-6 lg:px-20 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    {/* --- Left Side: 1 Image + 1 Lottie (Balanced Design) --- */}
                    <div className="relative flex justify-center items-center">
                        
                        {/* Main Office Image */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 w-full max-w-md lg:max-w-lg"
                        >
                            <img 
                                src={officeImage} 
                                alt="Our Office" 
                                className="w-full h-112.5 object-cover rounded-4xl shadow-2xl border-b-8 border-l-8 border-violet-600"
                            />
                        </motion.div>

                        {/* Floating Lottie Animation*/}
                        <motion.div 
                            initial={{ opacity: 0, x: 50, y: 50 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="absolute -bottom-10 -right-10 md:right-0 z-20 w-64 h-64 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-violet-100 p-4"
                        >
                            <Lottie animationData={AboutLottie} loop={true} />
                        </motion.div>

                        {/* Background Decorative Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-100 rounded-full blur-[120px] -z-10"></div>
                    </div>

                    {/* --- Right Side: Content --- */}
                    <div className="text-left space-y-8">
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
                            <h4 className="text-violet-600 font-bold uppercase tracking-widest mb-4">Our Journey</h4>
                            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                                Meet the <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-indigo-600">Next Hire</span> Team
                            </h1>
                        </motion.div>

                        <div className="space-y-6">
                            <p className="text-xl text-gray-700 leading-relaxed">
                                We believe that the right job can change a life, and the right person can transform a business. 
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-100">
                                <div>
                                    <h3 className="text-3xl font-bold text-violet-600">98%</h3>
                                    <p className="text-gray-500 text-sm">Success Rate</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-indigo-600">24/7</h3>
                                    <p className="text-gray-500 text-sm">Expert Support</p>
                                </div>
                            </div>

                            <motion.button 
                                onClick={scrollToFaq}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-linear-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg transition-all"
                            >
                                Learn More About Us
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FAQ Section --- */}
            <Faq faqRef={faqRef} />
        </div>
    );
};

export default AboutUs;