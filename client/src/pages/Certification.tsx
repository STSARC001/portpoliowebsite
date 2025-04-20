import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function Certification() {
  // Certifications data based on the attached information
  const certifications = [
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "#00c8ff"
    },
    {
      title: "Campaign Manager 360 Certification",
      issuer: "Google",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      color: "#ff3366"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Coursera",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "#39c4b2"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "#00c8ff"
    },
    {
      title: "AI For Everyone",
      issuer: "Coursera",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "#ff3366"
    }
  ];

  // Education data
  const education = {
    degree: "Bachelor of Engineering - Computer Engineering",
    institution: "Sandip Institute of Technology & Research Centre",
    period: "May 2021 – July 2024"
  };

  // Skills categorized
  const skills = {
    programming: ["Python", "Java", "Dart", "JavaScript (ReactJS)"],
    frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Flutter", "Node.js", "ReactJS"],
    technologies: ["AI Automation", "Machine Learning", "Natural Language Processing", "Deep Learning", "Reinforcement Learning", "Computer Vision", "Cloud Computing"],
    tools: ["Docker", "Kubernetes", "Git", "AWS", "GCP", "Azure"],
    projectManagement: ["Agile", "Scrum", "Team Leadership", "Stakeholder Engagement", "Product Development"],
    other: ["Data Visualization", "API Development", "Cross-platform Development", "Data Analysis"]
  };

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
      title="Certification Outline" 
      subtitle="Professional qualifications, education, and technical expertise"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Certifications Section - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <h3 className="font-orbitron text-[#00c8ff] mb-6 text-xl">Professional Certifications</h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="dashboard rounded-xl p-6 hover:glow transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4" 
                    style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}30` }}
                  >
                    <div className="text-lg" style={{ color: cert.color }}>
                      {cert.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-orbitron text-lg mb-1" style={{ color: cert.color }}>
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="font-orbitron text-[#00c8ff] mb-6 text-xl">Education</h3>
          
          <motion.div 
            className="dashboard rounded-xl p-6 hover:glow transition-all duration-300"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-6">
              <h3 className="font-orbitron text-lg mb-2 text-white">{education.degree}</h3>
              <p className="text-gray-300">{education.institution}</p>
              <p className="text-sm text-gray-400">{education.period}</p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-[#00c8ff]/20">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p className="text-sm text-gray-400">Computer Science Specialization</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-400">Focus on AI & Machine Learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="mt-10">
        <h3 className="font-orbitron text-[#00c8ff] mb-6 text-xl">Skills Matrix</h3>
        
        <div className="dashboard rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-orbitron text-md mb-3 text-white">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[#00c8ff]/10 text-[#00c8ff] rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-orbitron text-md mb-3 text-white">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[#ff3366]/10 text-[#ff3366] rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-orbitron text-md mb-3 text-white">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technologies.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[#39c4b2]/10 text-[#39c4b2] rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-orbitron text-md mb-3 text-white">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[#00c8ff]/10 text-[#00c8ff] rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-orbitron text-md mb-3 text-white">Project Management</h4>
              <div className="flex flex-wrap gap-2">
                {skills.projectManagement.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[#ff3366]/10 text-[#ff3366] rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-orbitron text-md mb-3 text-white">Other Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[#39c4b2]/10 text-[#39c4b2] rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Passion Projects */}
      <div className="mt-10">
        <h3 className="font-orbitron text-[#00c8ff] mb-6 text-xl">Passion Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="dashboard rounded-xl p-6 hover:glow transition-all duration-300"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h4 className="font-orbitron text-lg mb-3 text-[#ff3366]">AI Game Strategy Model</h4>
            <p className="text-gray-400 text-sm mb-4">
              Developed an AI model that plays a strategy-based game using Reinforcement Learning and achieved 95% win rate in simulated matches.
            </p>
            <div className="flex items-center">
              <span className="px-3 py-1 bg-[#ff3366]/10 text-[#ff3366] rounded-full text-xs mr-2">
                Reinforcement Learning
              </span>
              <span className="px-3 py-1 bg-[#ff3366]/10 text-[#ff3366] rounded-full text-xs">
                Game AI
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            className="dashboard rounded-xl p-6 hover:glow transition-all duration-300"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h4 className="font-orbitron text-lg mb-3 text-[#39c4b2]">Real-time Object Detection</h4>
            <p className="text-gray-400 text-sm mb-4">
              Built a deep learning model for real-time object detection using YOLO and TensorFlow, achieving an accuracy of 92% on a custom dataset.
            </p>
            <div className="flex items-center">
              <span className="px-3 py-1 bg-[#39c4b2]/10 text-[#39c4b2] rounded-full text-xs mr-2">
                TensorFlow
              </span>
              <span className="px-3 py-1 bg-[#39c4b2]/10 text-[#39c4b2] rounded-full text-xs mr-2">
                YOLO
              </span>
              <span className="px-3 py-1 bg-[#39c4b2]/10 text-[#39c4b2] rounded-full text-xs">
                Computer Vision
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}