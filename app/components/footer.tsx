import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-black py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold">Your Company</p>
        <div className="flex justify-center space-x-6 my-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
