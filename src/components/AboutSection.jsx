import { personalInfo } from '../data/portfolioData';

const AboutSection = () => {
    return (
        <section id="about" className="relative z-10 py-20 px-6 transition-all duration-500 transform">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold mb-12 text-center transform transition-all duration-700 hover:scale-105">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        About Me
                    </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="transform transition-all duration-500 hover:translate-x-2">
                        <div className="text-lg text-gray-300 leading-relaxed mb-6">
                            {personalInfo.bio}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <div className="text-purple-400 font-semibold mb-2">Education</div>
                                <div className="text-gray-400">{personalInfo.education}</div>
                            </div>
                            <div>
                                <div className="text-pink-400 font-semibold mb-2">Experience</div>
                                <div className="text-gray-400">{personalInfo.experience}</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative transform transition-all duration-500 hover:scale-105">
                        <div className="w-56 h-72 mx-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl animate-pulse" />
                            <div className="absolute inset-2 border-2 border-purple-500/50 rounded-xl" />
                            <div
                                className="absolute inset-4 border border-pink-500/30 rounded-xl animate-spin"
                                style={{ animationDuration: '10s' }}
                            />
                            <img
                                src={personalInfo.image}
                                alt="Profile"
                                className="relative w-full h-full object-cover rounded-xl z-10"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;