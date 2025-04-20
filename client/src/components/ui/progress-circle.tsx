import { motion } from "framer-motion";

interface ProgressCircleProps {
  percentage: number;
}

export function ProgressCircle({ percentage }: ProgressCircleProps) {
  const circumference = 2 * Math.PI * 38;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="transparent"
          stroke="rgba(0, 200, 255, 0.1)"
          strokeWidth="4"
        />
        
        {/* Progress Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="38"
          fill="transparent"
          stroke="#00c8ff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          transform="rotate(-90 50 50)"
        />
        
        {/* Percentage Text */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-orbitron text-2xl fill-white"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}
