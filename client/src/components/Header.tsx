import { ZyraTechLogo } from "@/assets/ZyraTechLogo";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-[#0c0e14] to-transparent">
      {/* Company Logo */}
      <Link href="/">
        <motion.div 
          className="flex items-center cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ZyraTechLogo className="mr-2" />
          <span className="font-orbitron text-xl font-semibold text-white">ZyraTech</span>
        </motion.div>
      </Link>
      
      {/* Navigation Menu - Desktop */}
      <motion.nav 
        className="hidden md:flex space-x-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/summary">
          <a className={`nav-item font-orbitron text-sm tracking-wide ${location === "/summary" ? "text-[#00c8ff]" : ""}`}>Summary</a>
        </Link>
        <Link href="/experience">
          <a className={`nav-item font-orbitron text-sm tracking-wide ${location === "/experience" ? "text-[#00c8ff]" : ""}`}>Experience</a>
        </Link>
        <Link href="/certification">
          <a className={`nav-item font-orbitron text-sm tracking-wide ${location === "/certification" ? "text-[#00c8ff]" : ""}`}>Certification</a>
        </Link>
        <a 
          href="mailto:abhijitdengale2003@gmail.com" 
          className="nav-item bg-transparent hover:bg-[#00c8ff]/10 border border-[#00c8ff] rounded-full px-6 py-1 font-orbitron text-sm tracking-wide"
        >
          Contact
        </a>
      </motion.nav>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          className="flex items-center" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#00c8ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="absolute top-full left-0 right-0 bg-[#0c0e14]/95 border-t border-[#00c8ff]/20 py-4 px-6 flex flex-col space-y-4 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/">
            <a className={`nav-item font-orbitron text-sm tracking-wide py-2 ${location === "/" ? "text-[#00c8ff]" : ""}`}>Home</a>
          </Link>
          <Link href="/summary">
            <a className={`nav-item font-orbitron text-sm tracking-wide py-2 ${location === "/summary" ? "text-[#00c8ff]" : ""}`}>Summary</a>
          </Link>
          <Link href="/experience">
            <a className={`nav-item font-orbitron text-sm tracking-wide py-2 ${location === "/experience" ? "text-[#00c8ff]" : ""}`}>Experience</a>
          </Link>
          <Link href="/certification">
            <a className={`nav-item font-orbitron text-sm tracking-wide py-2 ${location === "/certification" ? "text-[#00c8ff]" : ""}`}>Certification</a>
          </Link>
          <a 
            href="mailto:abhijitdengale2003@gmail.com" 
            className="nav-item bg-transparent border border-[#00c8ff] rounded-full px-6 py-2 font-orbitron text-sm tracking-wide inline-block text-center"
          >
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
}
