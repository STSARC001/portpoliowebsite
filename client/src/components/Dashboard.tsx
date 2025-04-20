import { ProgressCircle } from "@/components/ui/progress-circle";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <motion.div 
      className="absolute right-8 top-1/2 transform -translate-y-1/4 md:right-16 lg:right-24 w-full max-w-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Main Dashboard */}
      <div className="dashboard rounded-xl p-5 glow">
        <div className="mb-4">
          <h3 className="font-orbitron text-[#00c8ff] mb-2">Summary</h3>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Progress Circle */}
            <div className="flex flex-col items-center justify-center">
              <ProgressCircle percentage={10} />
              <span className="text-xs mt-2 text-gray-400">Concept of design</span>
            </div>
            
            {/* Outlook Stats */}
            <div className="bg-[#1a1f2a] rounded-lg p-3 border border-[#00c8ff]/20">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00c8ff]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#00c8ff]">Outlook</h4>
                  <p className="text-xs text-gray-300">Personal portfolio</p>
                </div>
              </div>
              <p className="text-xs mt-3 text-gray-400">Personal showcase details highlighting different elements</p>
              <div className="flex items-center mt-3">
                <p className="text-xs text-[#00c8ff] font-orbitron">Thus personal is rightlight</p>
              </div>
              <div className="flex mt-2 justify-between">
                <span className="text-xs text-gray-400">Core lang</span>
                <span className="text-xs text-gray-400">Time complexity</span>
              </div>
            </div>
          </div>
          
          {/* Bottom Dashboard Row */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Tasks */}
            <div className="bg-[#1a1f2a] rounded-lg p-3 border border-[#00c8ff]/20">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#00c8ff]/10 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00c8ff]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#00c8ff]">Tasks</h4>
                  <p className="text-xs text-gray-300">Todo</p>
                </div>
              </div>
              <p className="text-xs mt-3 text-gray-400">Tasks completed including creative design</p>
            </div>
            
            {/* UI Card */}
            <div className="bg-[#1a1f2a] rounded-lg p-3 border border-[#00c8ff]/20">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#39c4b2]/10 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#39c4b2]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#39c4b2]">UI Cards</h4>
                  <p className="text-xs text-gray-300">WireFrame</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
