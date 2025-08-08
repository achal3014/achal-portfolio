import { ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectsSection = () => {
  return (
  <section
    id="projects"
    className="relative z-10 py-20 px-6 transition-all duration-500"
  >
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold mb-12 text-center transform transition-all duration-700 hover:scale-105">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/20 rounded-lg hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: `slideInUp 0.8s ease-out ${index * 100}ms both`,
            }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg mr-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400 group-hover:text-purple-400 transition-colors" />
            </div>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

};

export default ProjectsSection;