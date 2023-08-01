import {
  bnCardSlider,
  bnCardSlider2,
  bnCardSlider3,
  productsSlider
} from '@/service/Datas';
import ProductSliderCard from './ProductSliderCard';
import Link from 'next/link';
// swiper
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

const CardEffectSlider = () => {
  return (
    <div className="flex flex-wrap gap-10 px-20 mb-6">
      <Swiper
        speed={200}
        grabCursor={true}
        modules={[EffectCards]}
        effect="cards"
        className="mySwiper w-[230px] "
      >
        {bnCardSlider.map((item) => (
          <SwiperSlide key={item.id} className="  rounded-2xl ">
            <Link href="/">
              <Image
                className=" h-full w-full rounded-lg"
                src={item.img}
                width={500}
                height={800}
                alt="banner"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        speed={200}
        grabCursor={true}
        modules={[EffectCards]}
        effect="cards"
        className="mySwiper w-[230px] "
      >
        {bnCardSlider2.map((item) => (
          <SwiperSlide key={item.id} className="  rounded-2xl ">
            <Link href="/">
              <Image
                className=" h-full w-full rounded-lg"
                src={item.img}
                width={500}
                height={800}
                alt="banner"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        speed={200}
        grabCursor={true}
        modules={[EffectCards]}
        effect="cards"
        className="mySwiper w-[230px] "
      >
        {bnCardSlider3.map((item) => (
          <SwiperSlide key={item.id} className="  rounded-2xl ">
            <Link href="/">
              <Image
                className=" h-full w-full rounded-lg"
                src={item.img}
                width={500}
                height={800}
                alt="banner"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardEffectSlider;
