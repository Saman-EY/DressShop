import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productsSlider } from '@/service/Datas';
import ProductSliderCard from './template/ProductSliderCard';
// img
// Import Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const LandingSlider = ({ right, color, img, hideBanner }) => {
  const sliderRef = useRef();

  return (
    <>
      <section className="mb-10 p-1 md:p-1 md:grid grid-cols-12  items-center gap-5 lg:gap-8 ">
        <div
          className={`col-span-2 hidden bg-red-300 md:flex gap-6  flex-col justify-between items-center ${hideBanner && "md:hidden"} ${
            !right && 'order-1'
          } `}
        >
          {!hideBanner && <Image className='' src={img} width={500} height={800} alt="image" />} 
          <Link
            className={`rounded-lg text-xs lg:text-sm ${
              color === 'red'
                ? 'bg-Red'
                : color === 'green'
                ? 'bg-PrimaryGreen'
                : color === 'purple' && 'bg-purple-600'
            }  text-white text-sm p-2 px-2 lg:px-6 whitespace-nowrap`}
            href="/"
          >
            مشاهده موارد بیشتر
          </Link>
        </div>
        <div className={`col-span-12 md:col-span-10  ${hideBanner && "md:col-span-12"} `}>
          <h3 className="border-b-2 border-PrimaryGreen block md:hidden w-fit mx-auto mt-3 mb-5 pb-2 ">
            جدید ترین محصولات
          </h3>
          <div className="border-b border-gray-400 flex mb-2 pb-2 justify-center gap-7">
            <Link
              className="border-2 border-gray-800 border-dashed rounded-full w-16 text-center  hover:border-solid"
              href="/"
            >
              زنانه
            </Link>
            <Link
              className="border-2 border-gray-800 border-dashed rounded-full w-16 text-center  hover:border-solid"
              href="/"
            >
              مردانه
            </Link>
            <Link
              className="border-2 border-gray-800 border-dashed rounded-full w-16 text-center  hover:border-solid"
              href="/"
            >
              بچگانه
            </Link>
          </div>
          <Swiper
            ref={sliderRef}
            speed={300}
            navigation
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              450: {
                slidesPerView: 2
              },
              640: {
                slidesPerView: 3
              },
              740: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 6
              }
            }}
            className="mySwiper "
          >
            {productsSlider.map((item) => (
              <SwiperSlide className="pb-2" key={item.id}>
                <ProductSliderCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Link
            className={`rounded-lg mx-auto flex w-fit  text-white text-sm p-2 px-5 md:hidden  ${hideBanner && "hidden"} ${
              color === 'red'
                ? 'bg-Red'
                : color === 'green'
                ? 'bg-PrimaryGreen'
                : color === 'purple' && 'bg-purple-600'
            } `}
            href="/"
          >
            مشاهده موارد بیشتر
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingSlider;
