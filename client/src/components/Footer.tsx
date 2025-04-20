import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="relative z-20 px-6 py-8 border-t border-[#00c8ff]/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500">Personal Cyber Security</p>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500">91 937 0162 316</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Copyright © 2024</p>
        </div>
      </div>
    </motion.footer>
  );
}
