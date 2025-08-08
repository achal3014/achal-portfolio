import { skills } from '../data/portfolioData';

const SkillsSection = () => {
  const developmentSkills = skills.development;
  const dataScienceSkills = skills.dataScience;

  const SkillCard = ({ skill, index, category }) => (
    <div
      className="group relative overflow-hidden p-5 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 hover:border-purple-400/60 rounded-xl text-center font-medium transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-purple-500/10"
      style={{
        animationDelay: `${index * 100}ms`,
        willChange: 'transform, box-shadow'
      }}
    >
      {/* Animated background glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)'
        }}
      />
      
      {/* Subtle animated border glow */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)'
        }}
      />
      
      {/* Corner accent */}
      <div 
        className="absolute top-0 right-0 w-6 h-6 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(225deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Category indicator */}
        <div 
          className="w-1.5 h-1.5 rounded-full mb-2 mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(45deg, #a855f7 0%, #ec4899 100%)'
          }}
        />
        
        {/* Skill text */}
        <div className="text-sm text-gray-300 group-hover:text-white transition-all duration-300 group-hover:font-medium">
          {skill}
        </div>
        
        {/* Subtle underline animation */}
        <div 
          className="mt-2 h-0.5 w-0 group-hover:w-6 transition-all duration-500 ease-out rounded-full mx-auto"
          style={{
            background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)'
          }}
        />
      </div>
      
      {/* Ripple effect on hover */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div 
          className="skill-card-ripple absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)'
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="relative z-10 py-20 px-6 transition-all duration-500">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 text-center transform transition-all duration-700 hover:scale-105">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        {/* Development Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
              Development
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {developmentSkills.map((skill, index) => (
              <SkillCard
                key={skill}
                skill={skill}
                index={index}
                category="development"
              />
            ))}
          </div>
        </div>

        {/* Data Science Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent">
              Data Science
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {dataScienceSkills.map((skill, index) => (
              <SkillCard
                key={skill}
                skill={skill}
                index={index + 6}
                category="datascience"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;