'use client';
import { useState } from 'react';
import Exchange from '@/icons/Exchange';
import PaperRocket from '@/icons/PaperRocket';
import Return from '@/icons/Return';
import Waranty from '@/icons/Waranty';
import SingleProductTabSec from './template/SingleProductTabSec';

const SingleProductMainSec = () => {
  const [ProductCartCount, setProductCartCount] = useState(1);

  const ProductCartCountFn = (action) => {
    if (action === 'decrease') {
      if (ProductCartCount > 1) {
        setProductCartCount((prev) => prev - 1);
      }
    } else if (action === 'increase') {
      setProductCartCount((prev) => prev + 1);
    }
  };

  return (
    <section className="bg-white flex flex-1 border rounded-md p-2">
      <section className="w-full">
        <h3 className="text-lg">شلوارک ورزشی مردانه برند کریویت کد va595</h3>
        <p className="text-Red my-4">۳۸۵,۰۰۰ تومان</p>
        <div className="text-lg my-2">گارانتی</div>
        <button className="rounded-md text-green-500 border border-green-500 p-2">
          تمامی محصولات نو و اورجینال هستند
        </button>
        <ul className="list-disc p-4 text-xs boldFont flex flex-col gap-2">
          <li>اندازه لباس</li>
          <li>
            M 48/50:
            <span className="text-gray-400 lightFont mr-2">فاق 28 و قد 45</span>
          </li>
        </ul>
        <div className="flex">
          <button className="text-sky-400 p-2 border border-sky-400 rounded-md text-xs mr-auto hover:bg-sky-400 hover:text-white transition-all">
            راهنمای سایز
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <p>انتخاب سایز:</p>
          <label htmlFor="p-size" className="relative cursor-pointer w-fit">
            <input
              type="checkbox"
              className="peer absolute invisible"
              id="p-size"
            />

            <div className="border-2 rounded-md flex items-center justify-center w-8 h-8 transition-all peer-checked:border-black">
              M
            </div>
          </label>
        </div>

        <section className="flex items-center gap-3 mt-3">
          <div className="text-sm flex">
            <button
              onClick={() => ProductCartCountFn('decrease')}
              className="border-2  p-2 rounded-r-md hover:border-Red hover:bg-Red transition-all hover:text-white"
            >
              -
            </button>
            <span className="border-2 border-l-0 border-r-0 flex items-center justify-center w-8 h-10">
              {ProductCartCount}
            </span>
            <button
              onClick={() => ProductCartCountFn('increase')}
              className="border-2  p-2  rounded-l-md hover:border-Red hover:bg-Red transition-all hover:text-white"
            >
              +
            </button>
          </div>

          <button className="bg-green-500 text-white py-2 px-4 rounded-md text-sm">
            افزودن به سبد خرید
          </button>
        </section>

        <SingleProductTabSec />
      </section>

      <section className="max-w-[12rem] w-full  flex-col gap-2 mr-2 hidden lg:flex">
        <div className="border-2 flex  gap-2 p-2 rounded-md py-3 text-sm">
          <span>
            <Exchange width={'25px'} height={'25px'} />
          </span>
          <div>
            <p>تعویض سایز</p>
            <p className="text-xs text-gray-600">با خیال راحت خرید کنید</p>
          </div>
        </div>
        <div className="border-2 flex  gap-2 p-2 rounded-md py-3 text-sm">
          <span>
            <PaperRocket width={'25px'} height={'25px'} />
          </span>
          <div>
            <p>ارسال سریع</p>
            <p className="text-xs text-gray-600">تیپاکس + پست پیشتاز</p>
          </div>
        </div>
        <div className="border-2 flex  gap-2 p-2 rounded-md py-3 text-sm">
          <span>
            <Waranty width={'25px'} height={'25px'} />
          </span>
          <div>
            <p>ضمانت</p>
            <p className="text-xs text-gray-600">اصالت و سلامت فیزیکی کالا</p>
          </div>
        </div>
        <div className="border-2 flex  gap-2 p-2 rounded-md py-3 text-sm">
          <span>
            <Return width={'25px'} height={'25px'} />
          </span>
          <div>
            <p>ضمانت بازگشت</p>
            <p className="text-xs text-gray-600">امکان مرجوعی کالا تا 7 روز</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SingleProductMainSec;
