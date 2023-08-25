import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../public/images/logo-no-background.svg';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DropDown from '@/components/template/DropDown';
import CartIconDropdown from './template/CartIconDropdown';
import BarsIcon from '@/icons/BarsIcon';
import MobileNavOverlay from './MobileNavOverlay';

const MainNavbar = ({ MobileNav, setMobileNav }) => {
  const props = { MobileNav, setMobileNav };

  const pathname = usePathname();

  return (
    <>
      <div
        className={`  p-4 z-20 w-full   text-[#363636] ${
          pathname === '/' ? 'absolute bg-transparent' : 'bg-[#f6f6f6]'
        } `}
      >
        <section className="flex flex-row-reverse lg:flex-row justify-center items-center lg:container mx-auto">
          <div className="flex gap-4 justify-end lg:justify-start flex-1">
            <button className="relative  group">
              <LocalMallOutlinedIcon />
              <span className="bg-Red text-white flex items-center justify-center w-5 h-5 rounded-full text-xs absolute -top-2 -left-2 numberFont">
                0
              </span>
              <CartIconDropdown />
            </button>
            <Link className="LinkHoverEffect hidden lg:block" href="/">
              ورود / ثبت نام
            </Link>
          </div>
          <Link href={'/'}>
            <Image
              src={Logo}
              width={1500}
              height={1500}
              priority
              className="w-fit h-14 flex-1"
              alt="logo"
            />
          </Link>

          <section className="flex-1">
            <section className="flex items-center justify-end lg:bg-Secondary p-2 rounded-md w-fit lg:mr-auto ml-auto ">
              <span>
                <button className="hidden lg:block">
                  <SearchIcon />
                </button>
                <button
                  onClick={() => setMobileNav((prev) => !prev)}
                  className="block lg:hidden"
                >
                  <BarsIcon />
                </button>
              </span>
              <input
                type="text"
                placeholder="هرچیزی که دوست دارید جستجو کنید"
                className="rounded-md p-1 pr-4 outline-none text-sm placeholder:text-xs text-gray-500 w-64 bg-transparent hidden lg:block"
              />
            </section>
          </section>
        </section>

        {/* divider */}
        <div className="border-t my-3 hidden lg:block"></div>

        <section className="hidden mt-4 text-sm container mx-auto lg:flex">
          <div className=" flex  justify-center items-center flex-1">
            <ul className="flex gap-4">
              <li className="relative group ">
                <Link className="LinkHoverEffect pb-4" href="/">
                  لباس زنانه
                  <ArrowDropDownIcon />
                </Link>

                <DropDown />
              </li>
              <li className="relative group ">
                <Link className="LinkHoverEffect pb-4" href="/">
                  لباس مردانه
                  <ArrowDropDownIcon />
                </Link>

                <DropDown />
              </li>
              <li className="relative group ">
                <Link className="LinkHoverEffect pb-4" href="/">
                  لباس بچگانه
                  <ArrowDropDownIcon />
                </Link>

                <DropDown />
              </li>
              <li className="relative group ">
                <Link className="LinkHoverEffect pb-4" href="/">
                  کفش و کتونی
                  <ArrowDropDownIcon />
                </Link>

                <DropDown />
              </li>
            </ul>
            <div className="block bg-black w-[2px] h-4 mx-3"></div>
            <ul className="flex gap-4">
              <li>
                <Link
                  className={`LinkHoverEffect ${
                    pathname === '/' && 'NavLinkActive'
                  } `}
                  href="/"
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  className={`LinkHoverEffect ${
                    pathname === '/store' && 'NavLinkActive'
                  } `}
                  href="/store"
                >
                  فروشگاه
                </Link>
              </li>
              <li>
                <Link
                  className={`LinkHoverEffect ${
                    pathname === '/contact-us' && 'NavLinkActive'
                  } `}
                  href="/contact-us"
                >
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link
                  className={`LinkHoverEffect ${
                    pathname === '/about-us' && 'NavLinkActive'
                  } `}
                  href="/about-us"
                >
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          <button className="mr-auto bg-SecondaryGreen p-2 rounded-md text-gray-800">
            پیگیری سفارشات
          </button>
        </section>
      </div>

      {/* MOBILE NAVBAR */}
      <AnimatePresence>
        {MobileNav && <MobileNavOverlay {...props} />}
      </AnimatePresence>
    </>
  );
};

export default MainNavbar;
