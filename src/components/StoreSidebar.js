'use client';
import { useEffect, useState } from 'react';
import StoreSidebarHeader from './template/StoreSidebarHeader';
import Link from 'next/link';
import Image from 'next/image';
import { Brands } from '@/service/Datas';
import ReactSlider from 'react-slider';

const StoreSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 5000000]);

  const convertToLocalString = (num) => {
    return num.toLocaleString();
  };

  return (
    <section className="flex flex-col gap-5">
      <div className=" bg-white w-full border border-gray-300 rounded-sm p-4 ">
        <StoreSidebarHeader header="انتخاب دسته بندی:" />
        <ul className="text-sm text-gray-600 lightFont flex flex-col gap-2 ">
          <li>
            <Link href="/">زنانه</Link>
          </li>
          <li>
            <Link href="/">مردانه</Link>
          </li>
          <li>
            <Link href="/">لباس بچه گانه</Link>
          </li>
          <li>
            <Link href="/">برندها</Link>
          </li>
          <li>
            <Link href="/">سایر محصولات</Link>
          </li>
          <li>
            <Link href="/">کفش استوک</Link>
          </li>
        </ul>
      </div>

      <div className=" bg-white w-full border border-gray-300 rounded-sm p-4 ">
        <StoreSidebarHeader header="موجود بودن محصولات" />
        <label
          className="flex items-center gap-2 text-gray-500 lightFont text-sm"
          htmlFor="entity"
        >
          <input id="entity" type="checkbox" />
          موجود است
        </label>
      </div>

      <div className=" bg-white w-full border border-gray-300 rounded-sm p-4 ">
        <StoreSidebarHeader header="انتخاب برند" />
        <ul className="max-h-48 overflow-auto SidebarUl px-2 flex flex-col gap-4">
          {Brands.map((item) => (
            <li key={item.id}>
              <Link
                href={'/'}
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <figure className="max-w-[67px]">
                    <Image
                      className="w-full h-full"
                      src={item.img}
                      width={200}
                      height={200}
                      alt="brand"
                    />
                  </figure>
                  <span className="text-sm text-gray-500 mt-1">
                    {item.name}
                  </span>
                </div>

                <span className="border border-gray-400 text-gray-600 p-1 text-xs rounded-full transition-all numberFont group-hover:bg-Red group-hover:text-white group-hover:border-Red">
                  {item.entity}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" bg-white w-full border border-gray-300 rounded-sm p-4 ">
        <StoreSidebarHeader header="فیلتر بر اساس قیمت" />

        <ReactSlider
          className="SliderRange"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          step={5000}
          min={0}
          max={5000000}
          value={priceRange}
          onChange={setPriceRange}
        />
        <div className="my-5 flex flex-wrap gap-2 items-center">
          <p className="text-gray-500 text-xs">قیمت: </p>
          <div className="flex items-center gap-2 numberFont text-sm">
            <p>{convertToLocalString(priceRange[0])} تومان</p>
            ---
            <p>{convertToLocalString(priceRange[1])} تومان</p>
          </div>
        </div>
        <button className="bg-gray-200 p-2 rounded-md text-sm px-4 mr-auto w-full">
          فیلتر
        </button>
      </div>
    </section>
  );
};

export default StoreSidebar;
