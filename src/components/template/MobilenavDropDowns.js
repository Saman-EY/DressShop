import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MobilenavDropDowns = ({ data }) => {
  const [height, setHeight] = useState(0);
  const ulRef = useRef();

  useEffect(() => {
    if (ulRef.current) {
      const ulHeight = ulRef.current.scrollHeight;
      setHeight(ulHeight);
    }
  }, []);

  const settingMotion3 = {
    initial: { height: 0 },
    animate: { height: height },
    exit: { height: 0 },
    transition: { ease: 'easeInOut', duration: 0.4 }
  };

  return (
    <>
      <motion.ul
        id="most"
        ref={ulRef}
        {...settingMotion3}
        className="w-full bg-red-200 flex flex-col px-6 overflow-hidden"
      >
        {data.map((item, index) => (
          <li key={index} className="border-b py-3 ">
            <Link href="/">{item.title}</Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default MobilenavDropDowns;
