import { SummaryIcon, ExperienceIcon, CertificationIcon } from "@/assets/NavigationIcons";
import { motion } from "framer-motion";

export default function NavigationButtons() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Summary Button */}
      <motion.div 
        className="dashboard rounded-xl p-6 text-center cursor-pointer hover:glow transition-all duration-300"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <SummaryIcon className="w-10 h-10 text-[#00c8ff]" />
        </div>
        <h3 className="font-orbitron text-lg mb-2">Summary</h3>
        <p className="text-sm text-gray-400">Projects Gallery</p>
        <p className="text-xs text-gray-500 mt-2">Timely live works in a portfolio about designs</p>
      </motion.div>
      
      {/* Experience Button */}
      <motion.div 
        className="dashboard rounded-xl p-6 text-center cursor-pointer hover:glow-red transition-all duration-300"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <ExperienceIcon className="w-10 h-10 text-[#ff3366]" />
        </div>
        <h3 className="font-orbitron text-lg mb-2">Experience Cloud</h3>
        <p className="text-sm text-gray-400">Career journey</p>
        <p className="text-xs text-gray-500 mt-2">An ease option of the powers amgen creative by swifts</p>
      </motion.div>
      
      {/* Certification Button */}
      <motion.div 
        className="dashboard rounded-xl p-6 text-center cursor-pointer hover:glow-teal transition-all duration-300"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <CertificationIcon className="w-10 h-10 text-[#39c4b2]" />
        </div>
        <h3 className="font-orbitron text-lg mb-2">Certification Outline</h3>
        <p className="text-sm text-gray-400">Specialty out destiny release stars</p>
        <div className="mt-4">
          <button className="text-xs text-[#39c4b2] border border-[#39c4b2]/50 rounded-full px-4 py-1 hover:bg-[#39c4b2]/10 transition-all">
            view more info
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
