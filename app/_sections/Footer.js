import Image from 'next/image';
import SocialIcons from '../_components/SocialIcons';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/abdulmajid-hope-839402280",
    color: "hover:text-blue-600",
    label: "Linkedin"
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/abdulmajid001",
    label: "Github"
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/abdulmajid_hope",
    color: "hover:text-pink-500",
    label: "Instagram"
  },
  {
    icon: <HiOutlineMail />,
    href: "mailto:abdulmajidhope@gmail.com",
    color: "hover:text-red-500",
    label: "Email"
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/MajidHope",
    color: "hover:text-sky-500",
    label: "X (Twitter)"
  }
];

function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light pt-[4rem] pb-[9rem] md:pb-[4rem]">
      <div className="max-w-[130rem] mx-auto px-4">
        <Image src="/Logo-icon-light.png" alt="Abdulmajid Hope Logo" width={60} height={60} className="mx-auto mb-9"/>
        <p className="text-center text-xl sm:text-2xl pb-6">
          &copy; {new Date().getFullYear()} Abdulmajid Hope. All rights reserved.
        </p>
        <SocialIcons socialArr={socials} />
      </div>
    </footer>
  )
}

export default Footer