import React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import LeftArrow from '@/icons/leftArrow';
import Link from 'next/link';
import MobilenavDropDowns from './template/MobilenavDropDowns';
import { NavLinks } from '@/service/Datas';

const MobileNavOverlay = ({ MobileNav, setMobileNav }) => {
  const [links, setLinks] = useState(NavLinks);

  const settingMotion1 = {
    initial: { opacity: 0 },
    animate: { opacity: 0.7 },
    exit: { opacity: 0 },
    transition: { ease: 'easeOut', duration: 0.3 }
  };
  const settingMotion2 = {
    initial: { x: 300 },
    animate: { x: 0 },
    exit: { x: 300 },
    transition: { ease: 'easeInOut', duration: 0.4 }
  };

  const handleLinkClick = (id) => {
    setLinks((prev) =>
      prev.map((link) =>
        link.id === id ? { ...link, dropdownOpen: !link.dropdownOpen } : link
      )
    );
  };

  return (
    <>
      <motion.div
        {...settingMotion1}
        onClick={() => setMobileNav(false)}
        className="bg-black fixed inset-0 z-30"
      ></motion.div>

      <motion.section
        {...settingMotion2}
        className="z-40 w-fit bg-white fixed inset-0 overflow-y-auto "
      >
        {/* search section */}

        <div className="h-16 flex shadow-md shadow-gray-100">
          <input
            className="flex-1 h-full px-4 outline-none"
            placeholder="جستجو برای محصولات"
            type="text"
          />
          <button className="pl-2">
            <SearchIcon
              sx={{
                color: '#a9a9a9',
                transition: 'all',
                ':hover': { color: '#8b8b8b' }
              }}
            />
          </button>
        </div>

        <ul className="text-sm text-gray-500">
          {links.map((item) => (
            <React.Fragment key={item.id}>
              <li
                onClick={() => handleLinkClick(item.id)}
                className={`border-b cursor-pointer  p-2 py-3  flex items-center justify-between flex-wrap transition-all ${
                  item.dropdownOpen && 'Mn-active'
                } `}
              >
                <Link href="/">{item.title}</Link>
                <button
                  className={`border border-gray-200 flex items-center justify-center pt-1 rounded-md transition-transform duration-300  ${
                    item.dropdownOpen && 'Mn-active-icon'
                  } `}
                >
                  <LeftArrow />
                </button>
              </li>

              <AnimatePresence>
                {item.dropdownOpen && (
                  <MobilenavDropDowns data={item.dropdownList} />
                )}
              </AnimatePresence>
            </React.Fragment>
          ))}

          <li className="border-b  p-2 py-3 flex items-center justify-between">
            <Link href="/">ورود / ثبت نام</Link>
          </li>
          <li className="border-b  p-2 py-3 flex items-center justify-between">
            <Link href="/">پیگیری سفارشات</Link>
          </li>
        </ul>
      </motion.section>
    </>
  );
};

export default MobileNavOverlay;
