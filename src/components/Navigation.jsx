const Navigation = ({ activeSection, handleScrollTo }) => {
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACTS" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-20">
        
        {/* Logo - Blending with background */}
        <img
          src="./src/assets/logo2.jpg"
          alt="My Logo"
          className="h-16 object-contain mix-blend-lighten select-none"
        />

        {/* Navigation Links - Hidden on small screens */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`cursor-pointer transition-colors ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
