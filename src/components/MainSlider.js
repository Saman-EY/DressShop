import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
// imgs
import slide1 from '../../public/images/banner1.png';
import slide2 from '../../public/images/banner2.png';
import slide3 from '../../public/images/banner3.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const MainSlider = () => {
  return (
    <Swiper
      effect="fade"
      speed={1000}
      navigation
      modules={[Navigation, EffectFade, Autoplay]}
      loop
      autoplay={{
        delay: 2000
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={slide1}
          className="w-full h-full"
          width={1800}
          height={1000}
          alt="banner"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={slide2}
          className="w-full h-full"
          width={1800}
          height={1000}
          alt="banner"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={slide3}
          className="w-full h-full"
          width={1800}
          height={1000}
          alt="banner"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
