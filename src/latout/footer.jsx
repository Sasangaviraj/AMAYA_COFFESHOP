import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sticky bg-[#0c0b18] text-white py-12">
      {/* Main Content Grid */}
      <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3 px-4 md:px-20">
        {/* About Section */}
        <div className="text-center">
          <h3 className="text-footer-p1 font-semibold tracking-widest mb-4">ABOUT</h3>
          <ul className="space-y-2 text-footer-p2 tracking-widest font-semibold">
            <li><a href="#" className="hover:text-h1">THE COMPANY</a></li>
            <li><a href="#" className="hover:text-h1">FAQ</a></li>
            <li><a href="#" className="hover:text-h1">PRIVACY POLICY</a></li>
          </ul>
        </div>

        {/* Locations Section */}
        <div className="text-center">
          <h3 className="text-footer-p1 font-semibold tracking-widest mb-4">LOCATIONS</h3>
          <ul className="space-y-2 text-footer-p2 tracking-widest font-semibold">
            <li><a href="#" className="hover:text-h1">SAN FRANCISCO</a></li>
            <li><a href="#" className="hover:text-h1">NEWPORT BEACH</a></li>
            <li><a href="#" className="hover:text-h1">SUN CITY</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-footer-p1 font-semibold tracking-widest mb-4">FOLLOW ALONG</h3>
          <div className="flex gap-4 text-xl items-center">
            <a href="#"><FaInstagram className="hover:text-h1" /></a>
            <a href="#"><FaFacebookF className="hover:text-h1" /></a>
            <a href="#"><FaTripadvisor className="hover:text-h1" /></a>
          </div>
        </div>
      </div>
      
      {/* Bottom Row */}
      <div className="mt-10 border-t border-gray-400 lg:border-hidden pt-6 px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-5 text-footer-p2 text-gray-400">
        <p className="mb-4 md:mb-0 text-center md:text-left">© 2020 AMAYA. ALL RIGHTS RESERVED.</p>

        {/* Centered Logo */}
        <div className="w-full flex justify-center">
          <img
            src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2021/02/Amaya-logo-white-1.png"
            alt="Amaya Logo"
            className="h-10 mb-4 md:mb-0 cursor-pointer"
            onClick={() => { navigate('/') }}
          />
        </div>

        <p className="text-white text-center md:text-right tracking-widest">BECAUSE WE LOVE COFFEE</p>
      </div>
    </footer>
  );
};

export default Footer;