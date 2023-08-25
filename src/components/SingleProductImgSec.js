import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import { productsSlider2 } from '@/service/Datas';
import Image from 'next/image';
import { autocompleteClasses } from '@mui/material';

const SingleProductImgSec = ({ params: { productId } }) => {
  const [data, setData] = useState('');
  const [activeThumb, setActiveThumb] = useState('');

  useEffect(() => {
    console.log(productsSlider2);
    console.log(productId);

    const temp = productsSlider2.filter((item) => item.id === +productId);
    setData(temp);
  }, [productId]);

  return (
    <section className="bg-white  md:max-w-sm lg:max-w-md flex-1 h-fit rounded-md overflow-hidden">
      <Swiper
        navigation
        spaceBetween={10}
        grabCursor
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: activeThumb }}
        className="mb-2"
      >
        {data &&
          data[0].gallery.map((item, index) => (
            <SwiperSlide key={index}>
              <figure className="relative pt-[90%] ">
                <Image
                  className="w-full h-full  absolute inset-0 "
                  src={item}
                  width={600}
                  height={600}
                  alt="gallery-image"
                />
              </figure>
            </SwiperSlide>
          ))}
      </Swiper>

      <Swiper
        onSwiper={setActiveThumb}
        navigation
        spaceBetween={5}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        centerInsufficientSlides
        className="gallerySlider"
      >
        {data &&
          data[0].gallery.map((item, index) => (
            <SwiperSlide
              className="cursor-pointer border-2 rounded-md !transition-all  hover:opacity-50"
              key={index}
            >
              <figure className="relative pt-[100%] ">
                <Image
                  className="w-full h-full  absolute inset-0 "
                  src={item}
                  width={200}
                  height={200}
                  alt="gallery-image"
                />
              </figure>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default SingleProductImgSec;
