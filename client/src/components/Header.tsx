import { ZyraTechLogo } from "@/assets/ZyraTechLogo";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-[#0c0e14] to-transparent">
      {/* Company Logo */}
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ZyraTechLogo className="mr-2" />
        <span className="font-orbitron text-xl font-semibold text-white">ZyraTech</span>
      </motion.div>
      
      {/* Navigation Menu - Desktop */}
      <motion.nav 
        className="hidden md:flex space-x-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="#" className="nav-item font-orbitron text-sm tracking-wide">Project Terms</a>
        <a href="#" className="nav-item font-orbitron text-sm tracking-wide">Best Out</a>
        <a href="#" className="nav-item font-orbitron text-sm tracking-wide">Comfort</a>
        <a 
          href="#" 
          className="nav-item bg-transparent hover:bg-[#00c8ff]/10 border border-[#00c8ff] rounded-full px-6 py-1 font-orbitron text-sm tracking-wide"
        >
          Talents
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
          <a href="#" className="nav-item font-orbitron text-sm tracking-wide py-2">Project Terms</a>
          <a href="#" className="nav-item font-orbitron text-sm tracking-wide py-2">Best Out</a>
          <a href="#" className="nav-item font-orbitron text-sm tracking-wide py-2">Comfort</a>
          <a 
            href="#" 
            className="nav-item bg-transparent border border-[#00c8ff] rounded-full px-6 py-2 font-orbitron text-sm tracking-wide inline-block text-center"
          >
            Talents
          </a>
        </motion.div>
      )}
    </header>
  );
}
