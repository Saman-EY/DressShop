import Checked from '@/icons/Checked';
import Exchange from '@/icons/Exchange';
import FastTruck from '@/icons/FastTruck';
import Return from '@/icons/Return';
import Thumbsup from '@/icons/Thumbsup';

const LandingIconSection = () => {
  return (
    <>
      <div className="mb-20" />
      <section className="flex flex-wrap justify-center md:grid grid-cols-5 mb-10 gap-3 gap-y-8">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <span className="border-2 border-black flex items-center justify-center w-fit rounded-xl p-5">
            <FastTruck />
          </span>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold">ارسال سریع</h3>
            <p className="text-gray-400 text-sm mt-2">تیپاکس + پست پیشتاز</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <span className="border-2 border-black flex items-center justify-center w-fit rounded-xl p-5">
            <Return width={"44px"} height={"44px"} />
          </span>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold">ضمانت بازگشت</h3>
            <p className="text-gray-400 text-sm mt-2">
              امکان مرجوعی کالا تا 7 روز
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <span className="border-2 border-black flex items-center justify-center w-fit rounded-xl p-5">
            <Thumbsup />
          </span>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold">10 درصد تخفیف</h3>
            <p className="text-gray-400 text-sm mt-2">برای اولین خرید شما</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <span className="border-2 border-black flex items-center justify-center w-fit rounded-xl p-5">
            <Checked />
          </span>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold">گارانتی</h3>
            <p className="text-gray-400 text-sm mt-2">
              اصالت و سلامت فیزیکی کالا
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <span className="border-2 border-black flex items-center justify-center w-fit rounded-xl p-5">
            <Exchange width={"44px"} height={"44px"} />
          </span>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold">تعویض سایز</h3>
            <p className="text-gray-400 text-sm mt-2">با خیال راحت خرید کنید</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingIconSection;
