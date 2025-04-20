import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NavigationButtons from "@/components/NavigationButtons";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen bg-background matrix-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <HeroSection />
      
      {/* Content Section with Title and Navigation Buttons */}
      <section className="relative z-20 -mt-64 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl mb-2 neon-text">Abhijit Dengale</h1>
            <h2 className="font-['Inter'] text-lg md:text-xl text-gray-300 mb-8">
              AI Agent Developer, Full Stack & ML Developer
            </h2>
            <h3 className="font-orbitron text-2xl text-[#00c8ff] mb-8">
              Building AI-Powered Solutions, CEO at ZyraTech
            </h3>
            <p className="font-['Inter'] text-gray-400 max-w-2xl">
              Specialized in machine learning, AI automation, and advanced algorithms to create scalable and intelligent systems. Leading innovative teams across technology frontiers.
            </p>
          </motion.div>
          
          {/* Navigation Buttons */}
          <NavigationButtons />
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
}
