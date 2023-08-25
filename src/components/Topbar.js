import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../../public/images/logo-no-background.svg';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Image from 'next/image';
import BarsIcon from '@/icons/BarsIcon';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import CartIconDropdown from './template/CartIconDropdown';

const Topbar = ({ MobileNav, setMobileNav }) => {
  const setting = {
    initial: { y: -50 },
    animate: { y: 0 },
    exit: { y: -50 },
    transition: { ease: 'easeOut', duration: 0.3 }
  };

  return (
    <motion.div
      {...setting}
      className="fixed z-30 top-0 w-full h-14 bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-200 px-4 "
    >
      <section className="flex flex-row-reverse items-center justify-center h-full w-full container mx-auto max-w-7xl">
        <div className="flex gap-4 justify-end items-center md:flex-1">
          <span className="cursor-pointer hidden md:block">
            <SearchIcon sx={{ color: '#414141' }} />
          </span>

          <button className="relative  group flex items-center">
            <LocalMallOutlinedIcon sx={{ color: '#414141' }} fontSize="small" />
            <span className="bg-Red text-white flex items-center justify-center w-4 h-4 rounded-full text-xs absolute -top-1 -left-2 numberFont md:hidden">
              0
            </span>
            <span className="hidden md:block numberFont text-sm text-gray-800 group-hover:text-gray-400 mx-2 ">
              0 تومان
            </span>
            <CartIconDropdown left={true} />
          </button>
        </div>

        <Link
          className="hidden flex-1 md:flex justify-center text-sm text-gray-600 LinkHoverEffect"
          href="/"
        >
          ورود / ثبت نام
        </Link>

        <picture className=" flex-1 text-center">
          <Image
            src={Logo}
            width={500}
            height={500}
            priority
            className="w-fit h-11 flex-1 mx-auto md:mx-0"
            alt="logo"
          />
        </picture>
        <span className="block md:hidden">
          <button
            onClick={() => setMobileNav((prev) => !prev)}
            className="block md:hidden text-[#414141]"
          >
            <BarsIcon />
          </button>
        </span>
      </section>
    </motion.div>
  );
};

export default Topbar;
