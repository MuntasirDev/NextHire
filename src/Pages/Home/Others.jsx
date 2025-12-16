import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaFeatherAlt,
  FaRegEnvelope,
  FaClock,
} from "react-icons/fa";

import LocationImageParis from "../../assets/Images/City1.jpg";
import LocationImageLondon from "../../assets/Images/City2.jpg";
import LocationImageNewYork from "../../assets/Images/City3.jpg";
import LocationImageAmsterdam from "../../assets/Images/City4.jpg";
import LocationImageCopenhagen from "../../assets/Images/City1.jpg";
import LocationImageBerlin from "../../assets/Images/City3.jpg";

import BlogImage1 from "../../assets/Images/blog1.jpg";
import BlogImage2 from "../../assets/Images/blog2.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LocationCard = ({ city, country, count, image, tag }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer relative"
  >
    <div className="h-40 overflow-hidden">
      <img
        src={image}
        alt={city}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
      {tag && (
        <span
          className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full text-white font-semibold ${
            tag === "New" ? "bg-blue-500" : "bg-green-500"
          }`}
        >
          {tag}
        </span>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900">
        {city}, {country}
      </h3>
      <p className="text-sm text-gray-500 mt-1 flex items-center">
        <FaMapMarkerAlt className="w-3 h-3 mr-1 text-violet-500" /> {count} companies
      </p>
    </div>
  </motion.div>
);

const JobsByLocation = () => {
  const locationData = [
    { city: "Paris", country: "France", count: 120, image: LocationImageParis, tag: "New" },
    { city: "London", country: "England", count: 68, image: LocationImageLondon, tag: "Trending" },
    { city: "New York", country: "USA", count: 90, image: LocationImageNewYork, tag: "New" },
    { city: "Amsterdam", country: "Holland", count: 86, image: LocationImageAmsterdam },
    { city: "Copenhagen", country: "Denmark", count: 186, image: LocationImageCopenhagen },
    { city: "Berlin", country: "Germany", count: 92, image: LocationImageBerlin },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Jobs by Location</h2>
          <p className="text-gray-500">Find your favourite jobs and get the benefits of yourself</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {locationData.map((loc, index) => (
            <LocationCard key={index} {...loc} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const BlogCard = ({ title, date, author, readTime, image, category }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
  >
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <span className="text-xs font-semibold text-violet-600 uppercase">{category}</span>
      <h3 className="text-lg font-bold text-gray-900 my-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-3">
        Find the most sustainable healthcare company by creating high-quality products.
      </p>
      <div className="flex justify-between items-center text-xs text-gray-400 border-t pt-3">
        <div className="flex items-center space-x-1">
          <FaFeatherAlt className="w-3 h-3 text-violet-500" />
          <span>{author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaClock className="w-3 h-3 text-violet-500" />
          <span>{readTime} mins read</span>
        </div>
        <span>{date}</span>
      </div>
    </div>
  </motion.div>
);

const NewsAndBlog = () => {
  const blogData = [
    { title: "39 Strengths and Weaknesses To Discuss in a Job Interview", date: "06 September", author: "Steven Jobs", readTime: 6, image: BlogImage1, category: "Review" },
    { title: "Interview Question: Why Don't You Have a Degree?", date: "06 September", author: "William Brand", readTime: 8, image: BlogImage2, category: "Article" },
    { title: "21 Job Interview Tips: How To Make a Great Impression", date: "06 September", author: "Social Media", readTime: 5, image: BlogImage1, category: "Review" },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">News and Blog</h2>
          <p className="text-gray-500">Get the latest news, updates and tips</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
            Load More Posts
          </button>
        </div>
      </div>
    </motion.section>
  );
};

// সংশোধিত CTA: ছোট, সেন্টারেড এবং রাউন্ডেড
const SubscriptionCTA = () => (
  <div className="flex justify-center items-center py-16 px-4 bg-gray-50">
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="w-full max-w-6xl py-12 px-8 rounded-3xl bg-violet-600 relative overflow-hidden shadow-2xl"
    >
      {/* Background Decorative Shape */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 -mr-20 -mt-20 rounded-full"></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight"
        >
          New Things Will Always <br className="hidden md:block" /> Update Regularly
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="bg-white p-2 rounded-2xl flex flex-col sm:flex-row items-center max-w-xl mx-auto shadow-lg"
        >
          <div className="relative grow w-full">
            <FaRegEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-3 text-gray-900 bg-transparent outline-none focus:ring-0"
            />
          </div>
          <button className="w-full sm:w-auto px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition duration-300 shrink-0">
            Subscribe
          </button>
        </motion.div>
      </div>
    </motion.section>
  </div>
);

const Others = () => {
  return (
    <div className="space-y-4">
      <JobsByLocation />
      <NewsAndBlog />
      <SubscriptionCTA />
    </div>
  );
};

export default Others;