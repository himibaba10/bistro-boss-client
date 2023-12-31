import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row text-center text-white">
        <div className="flex-1 bg-[#1F2937] py-14 md:py-24">
          <h2 className="text-2xl md:text-3xl font-medium">Contact Us</h2>
          <div className="mt-3 md:mt-6 text-base md:text-xl font-medium space-y-1 md:space-y-2">
            <p>Melartek, Savar, Bangladesh</p>
            <p>+88 01997722621</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="flex-1 bg-[#111827] py-14 md:py-24">
          <h2 className="text-2xl md:text-3xl font-medium">Follow Us</h2>
          <p className="text-base md:text-xl font-medium my-3 md:my-6">
            Join us on social media
          </p>
          <div className="text-2xl flex justify-center gap-3">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="text-center bg-[#151515] py-4 text-white text-sm md:text-base">
        <span>Copyright © ProjectByFerdous. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
