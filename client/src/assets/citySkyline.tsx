export function CityBackground() {
  return (
    <div className="relative w-full h-full">
      {/* City Skyline - We're using a dark overlay with gradients to create the effect */}
      <div className="absolute inset-0 bg-[#0c0e14]">
        {/* City Silhouette SVG */}
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100%" height="100%" fill="#0c0e14" />
          
          {/* Buildings */}
          <g stroke="#00C8FF" strokeWidth="0.5" fill="#111827">
            {/* Tall building 1 */}
            <rect x="100" y="150" width="60" height="450" />
            <line x1="130" y1="150" x2="130" y2="600" />
            <line x1="100" y1="200" x2="160" y2="200" />
            <line x1="100" y1="250" x2="160" y2="250" />
            <line x1="100" y1="300" x2="160" y2="300" />
            <line x1="100" y1="350" x2="160" y2="350" />
            <line x1="100" y1="400" x2="160" y2="400" />
            <line x1="100" y1="450" x2="160" y2="450" />
            <line x1="100" y1="500" x2="160" y2="500" />
            <line x1="100" y1="550" x2="160" y2="550" />
            
            {/* Spire building */}
            <polygon points="250,600 300,600 300,200 275,100 250,200" />
            <line x1="250" y1="250" x2="300" y2="250" />
            <line x1="250" y1="300" x2="300" y2="300" />
            <line x1="250" y1="350" x2="300" y2="350" />
            <line x1="250" y1="400" x2="300" y2="400" />
            <line x1="250" y1="450" x2="300" y2="450" />
            <line x1="250" y1="500" x2="300" y2="500" />
            <line x1="250" y1="550" x2="300" y2="550" />
            
            {/* Tall building 2 */}
            <rect x="350" y="200" width="80" height="400" />
            <rect x="370" y="150" width="40" height="50" />
            <rect x="380" y="100" width="20" height="50" />
            <line x1="350" y1="250" x2="430" y2="250" />
            <line x1="350" y1="300" x2="430" y2="300" />
            <line x1="350" y1="350" x2="430" y2="350" />
            <line x1="350" y1="400" x2="430" y2="400" />
            <line x1="350" y1="450" x2="430" y2="450" />
            <line x1="350" y1="500" x2="430" y2="500" />
            <line x1="350" y1="550" x2="430" y2="550" />
            
            {/* Empire State like building */}
            <rect x="500" y="250" width="90" height="350" />
            <rect x="520" y="150" width="50" height="100" />
            <rect x="530" y="50" width="30" height="100" />
            <rect x="535" y="20" width="20" height="30" />
            <line x1="500" y1="300" x2="590" y2="300" />
            <line x1="500" y1="350" x2="590" y2="350" />
            <line x1="500" y1="400" x2="590" y2="400" />
            <line x1="500" y1="450" x2="590" y2="450" />
            <line x1="500" y1="500" x2="590" y2="500" />
            <line x1="500" y1="550" x2="590" y2="550" />
            
            {/* Skyscraper 1 */}
            <rect x="650" y="100" width="70" height="500" />
            <polygon points="650,100 720,100 720,80 685,50 650,80" />
            <line x1="650" y1="150" x2="720" y2="150" />
            <line x1="650" y1="200" x2="720" y2="200" />
            <line x1="650" y1="250" x2="720" y2="250" />
            <line x1="650" y1="300" x2="720" y2="300" />
            <line x1="650" y1="350" x2="720" y2="350" />
            <line x1="650" y1="400" x2="720" y2="400" />
            <line x1="650" y1="450" x2="720" y2="450" />
            <line x1="650" y1="500" x2="720" y2="500" />
            <line x1="650" y1="550" x2="720" y2="550" />
            
            {/* Curved top building */}
            <path d="M800,600 L800,200 Q830,120 860,200 L860,600 Z" />
            <line x1="800" y1="250" x2="860" y2="250" />
            <line x1="800" y1="300" x2="860" y2="300" />
            <line x1="800" y1="350" x2="860" y2="350" />
            <line x1="800" y1="400" x2="860" y2="400" />
            <line x1="800" y1="450" x2="860" y2="450" />
            <line x1="800" y1="500" x2="860" y2="500" />
            <line x1="800" y1="550" x2="860" y2="550" />
            
            {/* Modern skyscraper */}
            <rect x="920" y="150" width="100" height="450" />
            <polygon points="920,150 1020,150 970,50 920,150" />
            <line x1="920" y1="200" x2="1020" y2="200" />
            <line x1="920" y1="250" x2="1020" y2="250" />
            <line x1="920" y1="300" x2="1020" y2="300" />
            <line x1="920" y1="350" x2="1020" y2="350" />
            <line x1="920" y1="400" x2="1020" y2="400" />
            <line x1="920" y1="450" x2="1020" y2="450" />
            <line x1="920" y1="500" x2="1020" y2="500" />
            <line x1="920" y1="550" x2="1020" y2="550" />
            
            {/* Sharp angled building */}
            <polygon points="1080,600 1150,600 1150,200 1115,150 1080,200" />
            <line x1="1080" y1="250" x2="1150" y2="250" />
            <line x1="1080" y1="300" x2="1150" y2="300" />
            <line x1="1080" y1="350" x2="1150" y2="350" />
            <line x1="1080" y1="400" x2="1150" y2="400" />
            <line x1="1080" y1="450" x2="1150" y2="450" />
            <line x1="1080" y1="500" x2="1150" y2="500" />
            <line x1="1080" y1="550" x2="1150" y2="550" />
          </g>
          
          {/* Digital Circuit Lines */}
          <g stroke="#00C8FF" strokeWidth="0.3" opacity="0.3">
            <line x1="0" y1="300" x2="1200" y2="300" />
            <line x1="0" y1="350" x2="1200" y2="350" />
            <line x1="0" y1="400" x2="1200" y2="400" />
            <line x1="0" y1="450" x2="1200" y2="450" />
            <line x1="0" y1="500" x2="1200" y2="500" />
            <line x1="0" y1="550" x2="1200" y2="550" />
            
            <line x1="200" y1="0" x2="200" y2="600" />
            <line x1="400" y1="0" x2="400" y2="600" />
            <line x1="600" y1="0" x2="600" y2="600" />
            <line x1="800" y1="0" x2="800" y2="600" />
            <line x1="1000" y1="0" x2="1000" y2="600" />
          </g>
          
          {/* Glow Effects */}
          <circle cx="550" cy="50" r="5" fill="#00C8FF" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="850" cy="150" r="3" fill="#FF3366" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="100" r="4" fill="#39C4B2" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.4;0.7" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      
      {/* Colored Overlays for Buildings */}
      <div className="absolute bottom-0 left-1/4 w-8 h-40 bg-[#ff3366] opacity-10 blur-xl"></div>
      <div className="absolute bottom-0 left-2/4 w-8 h-64 bg-[#00c8ff] opacity-10 blur-xl"></div>
      <div className="absolute bottom-0 right-1/4 w-8 h-32 bg-[#39c4b2] opacity-10 blur-xl"></div>
    </div>
  );
}
