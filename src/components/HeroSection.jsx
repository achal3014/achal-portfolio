import { ChevronDown, Eye, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const HeroSection = ({ isLoaded, handleScrollTo }) => {
    return (
        <section id = "home" className="relative z-10 min-h-screen flex items-center justify-center">
            <div className={`container mx-auto px-6 pt-15 text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="mb-8">
                    <h1 className="text-5xl md:text-7xl font-black mb-2 leading-none">
                        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {personalInfo.name}
                        </span>
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        {personalInfo.title}
                    </h2>
                    <div className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto mb-8">
                        "In the symphony of data, I find the melodies that transform
                        <span className="text-purple-400"> noise into insights </span> and
                        <span className="text-pink-400"> complexity into clarity</span>"
                    </div>

                </div>

                <div className="flex justify-center space-x-6 mb-12">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
                    <div className="w-4 h-4 border-2 border-purple-500 rotate-45" />
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse" />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button
                        onClick={() => handleScrollTo('projects')}
                        className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 animate-pulse-slow relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="flex items-center justify-center space-x-2 relative z-10">
                            <Eye className="w-5 h-5 group-hover:animate-pulse" />
                            <span>VIEW PORTFOLIO</span>
                        </div>
                    </button>
                    <button
                        onClick={() => handleScrollTo('contact')}
                        className="group px-8 py-3 border-2 border-purple-500 rounded-full font-semibold text-purple-400 hover:bg-purple-500/10 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                        <div className="flex items-center justify-center space-x-2 relative z-10">
                            <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                            <span className="group-hover:text-pink-300">GET IN TOUCH</span>
                        </div>
                    </button>
                </div>

                <div className="animate-bounce">
                    <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;