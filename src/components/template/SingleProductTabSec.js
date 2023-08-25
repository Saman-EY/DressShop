import { useState } from 'react';

const firstDescription = [
  { key: 'کد:', value: 'va603' },
  { key: 'برند:', value: 'crivit' },
  { key: 'مدل:', value: 'Ian 370228' },
  { key: 'رنگ:', value: 'مشکی' },
  { key: 'جنس:', value: '82% پلی استر، 18%الاستین' },
  { key: 'کمر:', value: 'کشی پهن' },
  { key: 'فاق:', value: 'متوسط' },
  { key: 'قابلیت:', value: 'فرم دهی' },
  { key: 'جیب: ', value: ' یک جیب موبایل در بغل' },
  { key: 'تنخور:', value: 'جذب' },
  { key: 'ثبات ابعادی', value: '' },
  { key: 'تناسب بهینه', value: '' }
];

const secondDescription = [
  { key: 'برند', value: 'کریویت' },
  { key: 'جنس', value: 'الاستین, پلی استر' },
  { key: 'طرح', value: 'ساده' },
  { key: 'استایل لباس', value: 'جذب' },
  { key: 'کشور مبدا برند', value: 'آلمان' },
  { key: 'ویژگی‌های تخصصی', value: 'امکان خشک شدن سریع' },
  { key: 'نوع فاق', value: 'متوسط' }
];

const SingleProductTabSec = () => {
  let [tab, setTab] = useState(1);

  // change tab
  const changeTab = (i) => {
    setTab(i);
  };

  return (
    <section className="mb-8">
      <div className="mb-4 mt-8">
        <ul className="flex gap-4 text-slate-600">
          <li
            onClick={() => setTab(1)}
            className={`TabBtn ${tab === 1 && 'TabActive'} `}
          >
            توضیحات
          </li>
          <li
            onClick={() => setTab(2)}
            className={`TabBtn ${tab === 2 && 'TabActive'} `}
          >
            توضیحات تکمیلی
          </li>
          <li
            onClick={() => setTab(3)}
            className={`TabBtn ${tab === 3 && 'TabActive'} `}
          >
            نظرات
          </li>
        </ul>
      </div>

      <section className={tab === 1 ? `` : 'hidden'}>
        <ul className="flex flex-col gap-3">
          {firstDescription.map((i, index) => (
            <li className="flex" key={index}>
              <span className="w-full max-w-[10rem]">{i.key}</span>
              <span className="text-gray-500">{i.value}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className={tab === 2 ? `max-w-md` : 'hidden'}>
        <ul className="flex flex-col gap-3">
          {secondDescription.map((i, index) => (
            <li className="flex" key={index}>
              <span className="flex-1">{i.key}</span>
              <span className="text-gray-500">{i.value}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className={tab === 3 ? `text-sm text-slate-700` : 'hidden'}>
        <p className='mb-5'>هیچ دیدگاهی برای این محصول نوشته نشده است.</p>
        <p className='mb-4'>
          .فقط مشتریانی که این محصول را خریداری کرده اند و وارد سیستم شده اند
          میتوانند برای این محصول دیدگاه(نظر) ارسال کنند.
        </p>
      </section>
    </section>
  );
};

export default SingleProductTabSec;
