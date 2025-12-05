import { Link, NavLink } from 'react-router';

export default function Navbar() {
  return (
    <div className="bg-background-light dark:bg-background-dark relative min-h-screen w-full flex flex-col font-display">
      {/* 🔥 FIXED NAVBAR (Top Overlay) */}
      <nav className="fixed top-0 left-0 w-full z-20 px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center text-white bg-transparent">
        {/* Top Row (Logo + Menu Button) */}
        <div className="flex w-full justify-between items-center">
          {/* Left Logo */}
          <h2 className="text-xl font-semibold">MyPortfolio</h2>

          {/* Right Menu Button (Mobile Only) */}
          <button
            className="px-4 py-2  rounded font-semibold bg-lime-600 text-gray-900 hover:bg-primary transition md:hidden"
            onClick={() =>
              document.getElementById('mobile-nav').classList.toggle('hidden')
            }
          >
            Menu
          </button>
        </div>

        {/* Middle Links (Desktop Only) */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide mt-4 md:mt-0">
          <NavLink to="/" className="hover:text-lime-600 transition">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-lime-600 transition">
            About
          </NavLink>
          <NavLink to="/services" className="hover:text-lime-600 transition">
            Services
          </NavLink>
          <NavLink to="/contact" className="hover:text-lime-600 transition">
            Contact
          </NavLink>
        </div>

        {/* 🔥 Mobile Dropdown Menu */}
        <div
          id="mobile-nav"
          className="hidden flex flex-col mt-3 space-y-3 text-sm font-semibold tracking-wide md:hidden bg-lime-600/20 dark:bg-lime-600/10  backdrop-blur-md p-4 rounded"
        >
          <NavLink to="/" className="hover:text-lime-600 transition">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-lime-600 transition">
            About
          </NavLink>
          <NavLink to="/services" className="hover:text-lime-600 transition">
            Services
          </NavLink>
          <NavLink to="/contact" className="hover:text-lime-600 transition">
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/3mnMTkpr/gggggg-removebg-preview.png"
          alt="Designer Background Image"
          className="
    h-full
    w-full
    md:w-2xl
    md:ml-[725px]
    object-cover
    opacity-80
    dark:opacity-150

    object-center          /* 🔥 Mobile perfect */
    md:object-bottom       /* 🔥 Desktop এ image নিচে নামে */
  "
        />

        <div className="absolute inset-0 bg-black/60 dark:bg-black/75"></div>
        <h1></h1>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-grow flex-col justify-end p-6 pb-8 text-white text-shadow">
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="text-lime-600">Hi, </span>I am Zakir Hasan{' '}
              <span className="text-lime-600">Hriday.</span>
            </h1>

            <p className="text-lg text-gray-300">
             
              <span className="bg-lime-600/20 dark:bg-lime-600/10 px-2 py-1 rounded hover:bg-lime-600">
                Full Stack Developer
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4 pt-4">
            <button className="flex-1 py-3 text-sm font-semibold uppercase tracking-wider border border-primary text-primary rounded transition-colors hover:bg-lime-600">
              Show Profile
            </button>

            <button className="flex-1 py-3 text-sm font-semibold uppercase tracking-wider bg-lime-600 text-gray-900 hover:bg-primary transition">
              Know More
            </button>
          </div>
        </div>

        {/* Down Arrow */}
        {/* <div className="mt-12 text-center">
          <span className="material-icons animate-bounce text-gray-400">
            keyboard_arrow_down
          </span>
        </div> */}
      </div>
    </div>
  );
}
