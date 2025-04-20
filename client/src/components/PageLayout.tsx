import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CityBackground } from "@/assets/citySkyline";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showBackButton?: boolean;
}

export default function PageLayout({ children, title, subtitle, showBackButton = true }: PageLayoutProps) {
  return (
    <motion.div 
      className="min-h-screen bg-background matrix-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      {/* Hero Section with City Background */}
      <section className="relative h-64 overflow-hidden city-outline">
        {/* City Skyline Background */}
        <div className="absolute inset-0 z-0">
          <CityBackground />
          
          {/* Digital overlay with tech patterns */}
          <div className="absolute inset-0 digital-circuit opacity-30"></div>
          
          {/* Colored accent light on buildings */}
          <motion.div 
            className="absolute bottom-0 left-1/4 w-8 h-40 bg-[#ff3366] opacity-20 blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/3 w-8 h-64 bg-[#00c8ff] opacity-20 blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/5 w-8 h-32 bg-[#39c4b2] opacity-20 blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.9 }}
          />
        </div>
      </section>
      
      {/* Content Section with Title */}
      <section className="relative z-20 -mt-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl neon-text">{title}</h1>
              
              {showBackButton && (
                <Link href="/">
                  <motion.button 
                    className="flex items-center text-[#00c8ff] border border-[#00c8ff]/50 rounded-full px-4 py-2 hover:bg-[#00c8ff]/10 transition-all font-orbitron text-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                  </motion.button>
                </Link>
              )}
            </div>
            
            <h2 className="font-['Inter'] text-lg text-gray-300 mb-6">
              {subtitle}
            </h2>
          </motion.div>
          
          {/* Page Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            {children}
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
}