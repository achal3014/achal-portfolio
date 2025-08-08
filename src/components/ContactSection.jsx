import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 py-20 px-6 transition-all duration-500">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-12 transform transition-all duration-700 hover:scale-105">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <div className="text-lg text-gray-300 mb-12">
          Ready to turn data into insights? Let's collaborate on your next project.
        </div>
        <div className="flex justify-center space-x-8">
          
          {/* GitHub */}
          <a
            href="https://github.com/achal3014"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 
            border border-purple-500/20 rounded-full hover:border-purple-500/50 
            transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/achal-s-a46b9126b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 
            border border-purple-500/20 rounded-full hover:border-purple-500/50 
            transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=achalkumar3014@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 
            border border-purple-500/20 rounded-full hover:border-purple-500/50 
            transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6" />
          </a>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
