import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sticky bg-[#0c0b18] text-white py-12 ">

      <div className="max-w-7xl mx-auto px-16 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 justify-between gap-8  md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-footer-p1 text-center font-semibold tracking-widest mb-4">ABOUT</h3>
          <ul className="space-y-2 text-center tracking-widest ">
            <li><a href="#" className="hover:text-h1 text-footer-p2 font-semibold ">THE COMPANY</a></li>
            <li><a href="#" className="hover:text-h1 text-footer-p2 font-semibold ">FAQ</a></li>
            <li><a href="#" className="hover:text-h1 text-footer-p2 font-semibold ">PRIVACY POLICY</a></li>
          </ul>
        </div>

        {/* Locations Section */}
        <div>
          <h3 className="text-footer-p1 font-semibold text-center  tracking-widest mb-4">LOCATIONS</h3>
          <ul className="space-y-2 text-center tracking-widest ">
            <li><a href="#" className="hover:text-h1 text-footer-p2 font-semibold ">SAN FRANCISCO</a></li>
            <li><a href="#" className="hover:text-h1 text-footer-p2 font-semibold ">NEWPORT BEACH</a></li>
            <li><a href="#" className="hover:text-h1 text-footer-p2 font-semibold ">SUN CITY</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-footer-p1 font-semibold text-center  tracking-widest  mb-4">FOLLOW ALONG</h3>
          <div className="flex flex-col md:justify-start gap-3 text-xl items-center">
            <a href="#"><FaInstagram  className="hover:text-h1" /></a>
            <a href="#"><FaFacebookF  className="hover:text-h1"/></a>
            <a href="#"><FaTripadvisor className="hover:text-h1" /></a>
          </div>
        </div>


      </div>
      {/* Bottom Row */}
      <div className="mt-10 border-t border-gray-400 lg:border-hidden  pt-6 px-20 flex flex-col md:flex-row justify-between items-center text-footer-p2 text-gray-400">
        <p className="mb-4 md:mb-0 text-center lg:block">© 2020 AMAYA. ALL RIGHTS RESERVED.</p>

        {/* Centered Logo */}
        <img
          src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2021/02/Amaya-logo-white-1.png"
          alt="Amaya Logo"
          className="h-10 mb-4 md:mb-0 cursor-pointer"
        />

        <p className="text-white tracking-widest">BECAUSE WE LOVE COFFEE</p>
      </div>

    </footer>
  );
};

export default Footer;
