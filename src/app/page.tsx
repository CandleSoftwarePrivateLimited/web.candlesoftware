'use client'; // This directive marks the component as a Client Component, enabling client-side interactivity

import React from 'react';
import { Lightbulb, Code, Palette, Smartphone, Mail, Info, Briefcase, ChevronRight } from 'lucide-react'; // Importing icons for various sections

// Main App component for the landing page
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 font-inter antialiased">
      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter for a clean professional look */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght=300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Global Custom CSS for animations and font-family */}
      {/* Moved from styled-jsx to a standard <style> tag to avoid "client-only" error in Next.js Server Components */}
      <style>
        {`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Inter', sans-serif;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInTop {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-in-top {
          animation: slideInTop 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.5s forwards; /* Delayed animation */
        }
        `}
      </style>

      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-50 p-4">
        <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 rounded-lg p-2 transition duration-300 hover:text-indigo-700">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            <span>Candle Web</span>
          </a>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md">Home</a></li>
            <li><a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md">Services</a></li>
            <li><a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md">Portfolio</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md">About</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md">Contact</a></li>
          </ul>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center min-h-screen bg-indigo-700 text-white overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-800 opacity-90"></div>
        <div className="absolute inset-0 z-0 opacity-10">
            {/* Background pattern - simple dots */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-y-16 gap-x-12 animate-fade-in">
                {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full opacity-5"></div>
                ))}
            </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-slide-in-top">
            Ignite Your Online Presence with <span className="text-yellow-400">Candle Web</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in-up">
            We craft exceptional websites and web applications that drive growth and deliver unparalleled digital experiences.
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transform transition duration-300 ease-in-out flex items-center justify-center mx-auto animate-fade-in">
            Explore Our Services <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1: Web Design */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex justify-center items-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Custom Web Design</h3>
              <p className="text-gray-600 text-center">
                Stunning, user-centric designs that reflect your brand identity and engage your audience. We focus on aesthetics and usability.
              </p>
            </div>
            {/* Service Card 2: Web Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex justify-center items-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Robust Web Development</h3>
              <p className="text-gray-600 text-center">
                Building scalable, secure, and high-performance websites and web applications using modern technologies.
              </p>
            </div>
            {/* Service Card 3: Mobile Responsiveness */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex justify-center items-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6 mx-auto group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Mobile Optimization</h3>
              <p className="text-gray-600 text-center">
                Ensuring your website looks and functions flawlessly on all devices, from desktops to smartphones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section (Placeholder) */}
      <section id="portfolio" className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Portfolio Item 1 */}
            <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src="https://placehold.co/600x400/D1D5DB/4B5563?text=Project+1"
                alt="Project Placeholder 1"
                className="w-full h-48 object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/600x400/D1D5DB/4B5563?text=Image+Load+Error'; }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform</h3>
                <p className="text-gray-600">A dynamic online store built for seamless shopping experiences.</p>
              </div>
            </div>
            {/* Placeholder Portfolio Item 2 */}
            <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src="https://placehold.co/600x400/D1D5DB/4B5563?text=Project+2"
                alt="Project Placeholder 2"
                className="w-full h-48 object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/600x400/D1D5DB/4B5563?text=Image+Load+Error'; }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SaaS Dashboard</h3>
                <p className="text-gray-600">Intuitive analytics dashboard for a leading software-as-a-service provider.</p>
              </div>
            </div>
            {/* Placeholder Portfolio Item 3 */}
            <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src="https://placehold.co/600x400/D1D5DB/4B5563?text=Project+3"
                alt="Project Placeholder 3"
                className="w-full h-48 object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/600x400/D1D5DB/4B5563?text=Image+Load+Error'; }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Non-Profit Website</h3>
                <p className="text-gray-600">A compassionate website designed to amplify the mission of a local charity.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-300">
              View All Projects <Briefcase className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8">About Candle Web</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              At <span className="font-semibold text-indigo-600">Candle Web</span>, we believe in illuminating your brand's potential through exceptional web solutions. Founded on the principles of creativity, precision, and client satisfaction, we are a passionate team of designers and developers dedicated to turning your digital vision into a tangible reality.
            </p>
            <p>
              We pride ourselves on our collaborative approach, working closely with each client to understand their unique goals and deliver tailor-made, high-quality websites and web applications that not only look great but also perform brilliantly. From initial concept to deployment and beyond, we are your trusted partner in the digital landscape.
            </p>
          </div>
          <div className="mt-12">
            <a href="#contact" className="inline-flex items-center bg-transparent border-2 border-indigo-600 text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300">
              Get in Touch <Info className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24 bg-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Let's Create Something Amazing</h2>
          <p className="text-lg opacity-90 mb-8">
            Ready to light up your digital presence? Contact us today for a free consultation and let's discuss how we can help your business shine online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:info@candleweb.com" className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transform transition duration-300 ease-in-out flex items-center justify-center">
              <Mail className="mr-2 w-5 h-5" /> Email Us
            </a>
            <a href="tel:+1234567890" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-indigo-700 transform transition duration-300 ease-in-out">
              Call Us: +1 (234) 567-890
            </a>
          </div>
          <div className="mt-12 text-gray-300">
            <p>123 Web Street, Digital City, DC 98765</p>
            <p className="mt-2">Follow us on social media:</p>
            <div className="flex justify-center space-x-6 mt-4">
              {/* Placeholder Social Icons */}
              <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.297 3.541c-.55.244-1.258.46-2.146.46C3.992 4 2 6.002 2 9.006c0 2.235 1.554 4.093 3.656 4.673-.01.1-.016.2-.016.304 0 1.252.88 2.3 2.052 2.766-.91.082-1.782.127-2.67.098C2.5 17.5 2 17.5 2 17.5c0 1.107 1.42 2 3.167 2s3.167-1.107 3.167-2h.001c0-.142-.01-.284-.029-.425 1.164.24 2.454.372 3.824.372 4.664 0 7.915-3.665 7.915-8.47 0-.17-.003-.339-.01-.508A5.736 5.736 0 0022 7.006a5.736 5.736 0 01-1.662.457 2.87 2.87 0 001.272-1.606 5.767 5.767 0 01-1.83.703A2.877 2.877 0 0017.542 3c-1.642 0-2.972 1.34-2.972 2.993 0 .235.026.465.078.687a8.167 8.167 0 01-5.91-2.981z" /></svg>
              </a>
              <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.002 3.797.048 1.005.045 1.79.227 2.417.477a3.92 3.92 0 012.347 2.347c.25.627.432 1.412.477 2.417.046 1.013.048 1.378.048 3.797s-.002 2.43-.048 3.797c-.045 1.005-.227 1.79-.477 2.417a3.92 3.92 0 01-2.347 2.347c-.627.25-1.412.432-2.417.477-1.013.046-1.378.048-3.797.048s-2.43-.002-3.797-.048c-1.005-.045-1.79-.227-2.417-.477a3.92 3.92 0 01-2.347-2.347c-.25-.627-.432-1.412-.477-2.417C2.002 14.315 2 13.95 2 12.315s.002-2.43.048-3.797c.045-1.005.227-1.79.477-2.417A3.92 3.92 0 014.66 3.153c.627-.25 1.412-.432 2.417-.477C8.315 2.002 8.68 2 12.315 2zm0 0l.02.01zm0 0a8.557 8.557 0 018.14 5.922 8.557 8.557 0 01-.005 8.799 8.557 8.557 0 01-5.927 8.14 8.557 8.557 0 01-8.799-.005 8.557 8.557 0 01-8.14-5.927A8.557 8.557 0 012 12.315c0-1.777.01-2.203.048-3.797a7.9 7.9 0 01.477-2.417A3.92 3.92 0 014.66 3.153c.627-.25 1.412-.432 2.417-.477C8.315 2.002 8.68 2 12.315 2zm-1.047 3.655a1.867 1.867 0 11-3.734 0 1.867 1.867 0 013.734 0zm-4.73 3.734a.81.81 0 100 1.62.81.81 0 000-1.62zm-.005 3.013a4.57 4.57 0 01-.007 3.626 4.57 4.57 0 01-3.626.007c-2.43.007-3.797-.003-3.797-.003S3.012 19.98 3.01 19.98c-1.005-.007-1.79-.19-2.417-.439A3.92 3.92 0 01-1.754 16.7c-.25-.627-.432-1.412-.477-2.417C-2 13.95-2 13.585-2 12.315s.002-2.43.048-3.797c.045-1.005.227-1.79.477-2.417A3.92 3.92 0 01.905 3.153c.627-.25 1.412-.432 2.417-.477C4.385 2.002 4.75 2 6.385 2c.983 0 1.954.008 3.797.048 1.013.045 1.798.227 2.417.477a3.92 3.92 0 012.347 2.347c.25.627.432 1.412.477 2.417.046 1.013.048 1.378.048 3.797s-.002 2.43-.048 3.797c-.045 1.005-.227 1.79-.477 2.417a3.92 3.92 0 01-2.347 2.347c-.627.25-1.412.432-2.417.477C13.68 21.998 13.315 22 12.315 22zm-6.66-.439a3.92 3.92 0 01-2.347-2.347c-.25-.627-.432-1.412-.477-2.417C2.002 14.315 2 13.95 2 12.315s.002-2.43.048-3.797c.045-1.005.227-1.79.477-2.417A3.92 3.92 0 014.66 3.153c.627-.25 1.412-.432 2.417-.477C8.315 2.002 8.68 2 12.315 2zm-4.73 3.734a1.867 1.867 0 11-3.734 0 1.867 1.867 0 013.734 0z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Candle Web. All rights reserved.</p>
          <div className="mt-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white mx-2">Privacy Policy</a> |
            <a href="#" className="hover:text-white mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
