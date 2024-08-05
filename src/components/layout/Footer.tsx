import { Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full px-10">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold min-w-[200px]">Logo</div>
        <div className="hidden items-center justify-between font-bold min-w-[450px] lg:flex">
          <Link>Link One</Link>
          <Link>Link Two</Link>
          <Link>Link Three</Link>
          <Link>Link Four</Link>
          <Link>Link Five</Link>
        </div>
        <div className="flex justify-end items-center min-w-[200px]">
          <span className="mr-3">
            <FaFacebook size={25} />
          </span>
          <span className="mr-3">
            <FaInstagram size={25} />
          </span>
          <span>
            <FaYoutube size={25} />
          </span>
        </div>
      </div>
      <div className="w-full border border-gray-400 mt-[70px]"></div>
      <div className="hidden justify-between w-[580px] mt-[30px] m-auto md:flex text-xs lg:text-sm">
        <span>© 2023 Relume. All rights reserved.</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Cookies Settings</span>
      </div>
    </div>
  );
}
