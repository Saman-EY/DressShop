'use client';
import FourCardSection from '@/components/template/FourCardSection';
import LandingSlider from '@/components/LandingSlider';
import MainSlider from '@/components/MainSlider';
import sliderSideImg from '../../public/images/sliderBanner2.png';
import sliderSideImg2 from '../../public/images/sliderBanner3.png';
import sliderSideImg3 from '../../public/images/sliderBanner1.png';
import CardEffectSlider from '@/components/template/CardEffectSlider';
import BannerSection from '@/components/template/BannerSection';
import LandingIconSection from '@/components/template/LandingIconSection';
import Divider from '@/components/template/Divider';

export default function Home() {
  return (
    <section className='bg-[#FAF8F6] '>
      <LandingSlider img={sliderSideImg} right={true} color={"green"} />
      <FourCardSection />
      <LandingSlider img={sliderSideImg2} right={false} color={"red"} />
      <CardEffectSlider />
      <BannerSection />
      <LandingSlider img={sliderSideImg3} right={true} color={"purple"} />
      <LandingIconSection />
      <Divider />
    </section>
  );
}
