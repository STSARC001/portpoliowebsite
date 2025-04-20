import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function Experience() {
  // Experience data based on the attached information
  const experiences = [
    {
      company: "ZyraTech",
      role: "CEO",
      period: "September 2024 – Present",
      location: "India",
      achievements: [
        "Spearheaded the development and deployment of 10+ AI-driven web applications, increasing client acquisition by 40% and revenue by 20%.",
        "Launched AI-powered tools that improved customer engagement by 40%, driving a 25% increase in monthly active users.",
        "Successfully led a team of 11+ to develop innovative products in AI courses, audiobook sales, and career assistance programs."
      ],
      skills: ["AI Automation", "Machine Learning", "Web Development", "Team Leadership", "Cloud Solutions"],
      color: "#00c8ff"
    },
    {
      company: "Money Forward",
      role: "Project Manager",
      period: "April 2024 – October 2024",
      location: "Tokyo, Japan",
      achievements: [
        "Led a cross-functional team of 15+ developers and analysts to deliver 8 fintech projects worth over $2M.",
        "Enhanced project delivery efficiency by 20%, reducing timelines by 3 weeks on average.",
        "Implemented Agile methodologies, optimizing resource management and collaboration."
      ],
      skills: ["Agile Project Management", "Machine Learning Integration", "Team Collaboration", "Fintech Solutions"],
      color: "#ff3366"
    },
    {
      company: "FlyLab Solutions Pvt Ltd",
      role: "Full-Stack Developer",
      period: "May 2023 – May 2024",
      location: "Nashik, Maharashtra, India",
      achievements: [
        "Developed cross-platform mobile applications using Flutter, integrating ReactJS for responsive UIs.",
        "Worked closely with designers and project managers to bring innovative app features to market."
      ],
      skills: ["Flutter", "ReactJS", "Mobile App Development", "Full-stack Engineering"],
      color: "#39c4b2"
    }
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      title="Experience Cloud" 
      subtitle="Professional journey across leading tech organizations"
    >
      {/* Timeline */}
      <div className="relative pb-12">
        {/* Timeline track */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-[#00c8ff] via-[#ff3366] to-[#39c4b2] transform -translate-x-1/2"></div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="mb-12 relative"
            >
              {/* Timeline dot */}
              <div 
                className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-2 transform -translate-x-1/2 flex items-center justify-center"
                style={{ 
                  borderColor: exp.color, 
                  background: `${exp.color}20`,
                  boxShadow: `0 0 15px ${exp.color}50`
                }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: exp.color }}></div>
              </div>
              
              {/* Experience card */}
              <div className={`ml-12 md:ml-0 md:${index % 2 === 0 ? 'mr-1/2 pr-8' : 'ml-1/2 pl-8'}`}>
                <motion.div 
                  className="dashboard rounded-xl p-6 hover:glow transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="mb-4">
                    <h3 className="font-orbitron text-xl mb-1" style={{ color: exp.color }}>{exp.company}</h3>
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                      <p className="text-white font-semibold">{exp.role}</p>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                    </div>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-orbitron text-sm mb-2 text-gray-300">Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-xs mr-2 mt-1" style={{ color: exp.color }}>▹</span>
                          <p className="text-sm text-gray-400">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-orbitron text-sm mb-2 text-gray-300">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 rounded-full text-xs"
                          style={{ 
                            background: `${exp.color}10`, 
                            color: exp.color,
                            border: `1px solid ${exp.color}30`
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Additional Career Info */}
      <div className="dashboard rounded-xl p-6 mt-8">
        <h3 className="font-orbitron text-[#00c8ff] mb-4">Career Highlights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-orbitron text-md mb-3 text-white">Professional Growth</h4>
            <p className="text-gray-400 text-sm">
              Progressed from a developer role to leading a tech company, developing expertise in AI and machine learning along the way. Built a reputation for creating innovative solutions that drive business growth and enhance user experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-orbitron text-md mb-3 text-white">Leadership Philosophy</h4>
            <p className="text-gray-400 text-sm">
              Focused on fostering innovation through collaborative environments where team members can thrive. Believe in mentoring talent and creating systems that allow for continuous improvement and learning.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-[#00c8ff]/20">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Total Experience</p>
            <p className="text-white font-orbitron">3+ Years</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}