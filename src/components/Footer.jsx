const Footer = () => {
  return (
    <footer className="relative z-10 py-8 px-6 border-t border-purple-500/20">
      <div className="container mx-auto text-center">
        <div className="text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} S Achal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
