import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MainNavbar from './MainNavbar';
import MainSlider from './MainSlider';
import Topbar from './Topbar';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [MobileNav, setMobileNav] = useState(false);

  const props = { MobileNav, setMobileNav };
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 80) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>{visible && <Topbar {...props} />}</AnimatePresence>
      <MainNavbar {...props} />
      {pathname === '/' && <MainSlider />}
    </>
  );
};

export default Header;
