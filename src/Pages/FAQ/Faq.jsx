import React from 'react';
import LottieWrapper from 'lottie-react';
import { motion } from 'framer-motion';
import faqlottie from '../../Assets/Lotties/Contact Us _ FAQ.json';

const Lottie = LottieWrapper.default || LottieWrapper;

const Faq = ({ faqRef }) => {
    const faqData = [
        {
            question: "How do candidates apply for a job on NextHire?",
            answer: "Candidates can simply browse our 'Browse Jobs' section, select a position that interests them, and click the 'Apply Now' button. Our team ensures the application is immediately delivered to the respective recruiter."
        },
        {
            question: "How do we ensure personal data security?",
            answer: "At NextHire, we prioritize user privacy. We use industry-standard encryption and secure servers to protect all profile information and application data from unauthorized access."
        },
        {
            question: "Can users track their application status?",
            answer: "Absolutely! We provide a dedicated 'My Applications' dashboard where candidates can track the real-time status of every application they have submitted through our platform."
        },
        {
            question: "How do recruiters connect with talented professionals?",
            answer: "We provide recruiters with advanced filtering tools to view profiles. Once we match a candidate's skills with a job, recruiters can contact them directly via our secure communication channels."
        },
        {
            question: "How does the NextHire team support its users?",
            answer: "Our support team is available 24/7 to assist with any technical issues or inquiries. We are committed to making the hiring process as smooth as possible for both parties."
        }
    ];

    return (
        <section ref={faqRef} className="bg-white py-20 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                
                {/* --- FAQ Banner Section --- */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-violet-50 rounded-3xl p-8 md:p-12 mb-16 overflow-hidden relative">
                    <div className="md:w-2/3 z-10 text-center md:text-left">
                        <motion.h2 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-gray-900 mb-4"
                        >
                            Got <span className="text-violet-600">Questions?</span>
                        </motion.h2>
                        <p className="text-lg text-gray-600 max-w-md">
                            Everything you need to know about how our team manages the NextHire platform. If you can't find your answer here, feel free to reach out to us.
                        </p>
                    </div>
                    <div className="md:w-1/3 w-full max-w-75">
                        <Lottie animationData={faqlottie} loop={true} />
                    </div>
                </div>

                {/* --- Accordion Section --- */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqData.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="collapse collapse-plus bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
                        >
                            <input type="radio" name="faq-accordion" defaultChecked={index === 0} /> 
                            <div className="collapse-title text-xl font-bold text-gray-800 py-5">
                                {item.question}
                            </div>
                            <div className="collapse-content"> 
                                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                                    {item.answer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;