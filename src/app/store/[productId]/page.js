"use client"
import LandingSlider from '@/components/LandingSlider';
import SingleProductImgSec from '@/components/SingleProductImgSec';
import SingleProductMainSec from '@/components/SingleProductMainSec';
import SingleProductBreadcrump from '@/components/template/SingleProductBreadcrump';

const page = ({ params }) => {
  return (
    <section className='mx-auto max-w-7xl px-3'>
      <SingleProductBreadcrump />

      <section className='flex flex-col md:flex-row gap-2 mb-14'>
        <SingleProductImgSec params={params} />

        <SingleProductMainSec />
      </section>

      <LandingSlider  hideBanner={true} />
    </section>
  );
};

export default page;
