import { CityBackground } from "@/assets/citySkyline";
import Dashboard from "@/components/Dashboard";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden city-outline">
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
      
      {/* Silhouette Figure and Content */}
      <div className="relative z-10 h-full flex items-center">
        {/* Silhouette Figure */}
        <div className="absolute left-0 bottom-0 h-4/5 w-full max-w-md flex items-end">
          <div className="w-full h-full bg-black/80" style={{
            maskImage: 'linear-gradient(to right, black 40%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 60%)'
          }}></div>
        </div>
        
        {/* Floating Dashboard */}
        <Dashboard />
      </div>
    </section>
  );
}
