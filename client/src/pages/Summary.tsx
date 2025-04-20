import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function Summary() {
  // Projects data based on the attached information
  const projects = [
    {
      title: "AI-Powered Chatbot",
      description: "An AI-powered chatbot for customer support, reducing query resolution time by 50% and decreasing support ticket volume by 30%. Improved customer satisfaction by 15% through enhanced interaction efficiency and personalized responses.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: "#00c8ff"
    },
    {
      title: "YouTube Automation System",
      description: "Built an automated YouTube management system that published 50+ videos across 10 channels, leading to a 100% increase in views and a 50% growth in subscribers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: "#ff3366"
    },
    {
      title: "Cinema Plus App",
      description: "Developed the Cinema Plus app, achieving over 50,000 downloads in the first 6 months and a 4.5-star rating on the Play Store. Enhanced user engagement by 40%, with daily active users increasing by 30%.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      color: "#39c4b2"
    },
    {
      title: "AI-Based Sentiment Analysis Tool",
      description: "Developed a sentiment analysis tool leveraging NLP to analyze social media posts. Achieved 85% accuracy in sentiment classification and used insights to influence marketing strategies for clients, increasing customer acquisition by 30%.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "#00c8ff"
    },
    {
      title: "Autonomous Chatbot for Healthcare Support",
      description: "Developed an autonomous chatbot using reinforcement learning to provide real-time health advice, integrated with EHR systems. Reduced consultation waiting times by 40% and provided instant support to over 1,000 users daily.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "#ff3366"
    },
    {
      title: "AI-Driven Recommender System",
      description: "Designed an AI-powered recommendation engine for an e-commerce platform, increasing conversion rates by 25% through personalized product recommendations. Integrated collaborative filtering and content-based algorithms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "#39c4b2"
    },
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <PageLayout 
      title="Projects Gallery" 
      subtitle="Showcasing innovative AI and technological solutions developed by Abhijit Dengale"
    >
      {/* Summary Description */}
      <div className="dashboard rounded-xl p-6 mb-8 glow">
        <h3 className="font-orbitron text-[#00c8ff] mb-4">About Me</h3>
        <p className="text-gray-300 mb-4">
          As an AI Agent Developer and Full-Stack Developer, I specialize in machine learning, AI automation, and advanced algorithms to create scalable and intelligent systems. My expertise spans from AI-driven applications to full-stack web development and cloud-based solutions.
        </p>
        <p className="text-gray-300">
          Leading ZyraTech, I've successfully delivered AI-powered tools that increased customer engagement and streamlined operations, while my role as a Project Manager involved optimizing workflows for high-stakes financial technology projects.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="dashboard rounded-xl p-6 hover:glow transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex items-start mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mr-4" 
                style={{ background: `${project.color}10`, border: `1px solid ${project.color}30` }}
              >
                <div className="text-lg" style={{ color: project.color }}>
                  {project.icon}
                </div>
              </div>
              <div>
                <h3 className="font-orbitron text-lg mb-2" style={{ color: project.color }}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Technical Skills Section */}
      <div className="mt-10">
        <h3 className="font-orbitron text-[#00c8ff] mb-6 text-xl">Technical Skills</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="dashboard rounded-xl p-6">
            <h4 className="font-orbitron text-md mb-4">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "Dart", "JavaScript"].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-[#00c8ff]/10 text-[#00c8ff] rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="dashboard rounded-xl p-6">
            <h4 className="font-orbitron text-md mb-4">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {["TensorFlow", "PyTorch", "Flutter", "ReactJS", "Node.js"].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-[#ff3366]/10 text-[#ff3366] rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="dashboard rounded-xl p-6">
            <h4 className="font-orbitron text-md mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {["AI Automation", "Machine Learning", "NLP", "Deep Learning", "Cloud Computing"].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-[#39c4b2]/10 text-[#39c4b2] rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}