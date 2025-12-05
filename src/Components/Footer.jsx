const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <p className="text-sm">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>

        {/* Right Side (Links / Socials) */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
