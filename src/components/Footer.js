import Image from 'next/image';
import Enamad from '../../public/images/enamad.png';
import Instagram from '@/icons/Instagram';
import WhatsApp from '@/icons/WhatsApp';
import Telegram from '@/icons/Telegram';

const Footer = () => {
  return (
    <section className=" ">
      <section className="bg-[#ECEFF1] items-center grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        <div className="border border-gray-400 rounded-md bg-white text-center text-sm h-full flex flex-col gap-4 p-2 w-full  max-w-lg justify-self-center ">
          <h3 className="text-Red text-lg font-bold ">فروشگاه اینترنتی</h3>
          <div className="text-gray-500  ">
            <p>مرکز خرید کالاهای اورجینال از برندهای معتبر</p>
            <p>لذت اورجینال پوشیدن را با ما تجربه کنید</p>
          </div>
          <p className="text-slate-600">
            آدرس: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <div className="flex flex-col gap-2 text-slate-600 numberFont">
            <p>تلفن: 099999999999</p>
            <p>موبایل: 099999999999</p>
            <p>ایمیل: lorem@gmail.com</p>
          </div>
        </div>

        <div className="border border-gray-400 rounded-md bg-white text-center text-sm h-full justify-self-center  p-2 w-full max-w-lg items-center">
          <a href="/">
            <p className="text-blue-600 mb-2">نماد اعتماد الکترونیکی</p>
            <Image
              className="w-24 mx-auto"
              src={Enamad}
              width={400}
              height={400}
              alt="img"
            />
          </a>
          <div className="border-gray-500 border-b border-dashed h-1 mx-auto max-w-[200px] mt-4" />

          <div className="flex gap-2 items-center justify-center mt-4">
            <span className="text-gray-400 border-2 border-gray-400 p-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-rose-700 hover:text-white hover:border-transparent">
              <Instagram />
            </span>
            <span className="text-gray-400 border-2 border-gray-400 p-2 rounded-full cursor-pointer transition-all duration-200 hover:text-white hover:border-transparent hover:bg-green-600 ">
              <WhatsApp />
            </span>
            <span className="text-gray-400 border-2 border-gray-400 p-2 rounded-full cursor-pointer transition-all duration-200 hover:text-white hover:border-transparent hover:bg-sky-500 ">
              <Telegram />
            </span>
          </div>
        </div>

        <div className="border border-gray-400 rounded-md bg-white text-center text-sm h-full flex flex-col gap-4 p-2 w-full max-w-lg justify-self-center">
          <ul className="text-gray-500  flex flex-col gap-4">
            <li className="font-bold text-black LinkHoverEffect">
              <a href="/">دسترسی سریع</a>
            </li>
            <li className="LinkHoverEffect">
              <a href="/">مقالات</a>
            </li>
            <li className="LinkHoverEffect">
              <a href="/">لباس مردانه</a>
            </li>
            <li className="LinkHoverEffect">
              <a href="/">لباس زنانه</a>
            </li>
            <li className="LinkHoverEffect">
              <a href="/">لباس دخترانه</a>
            </li>
            <li className="LinkHoverEffect">
              <a href="/">لباس پسرانه</a>
            </li>
            <li className="LinkHoverEffect">
              <a href="/store">فروشگاه</a>
            </li>
          </ul>
        </div>

        <div className="border border-gray-400 rounded-md bg-white text-center text-sm h-full  gap-4 p-2 w-full max-w-lg justify-self-center ">
          <ul className="text-gray-500  flex flex-col gap-3">
            <li className="font-bold text-black LinkHoverEffect">
              <a href="/">خدمات مشتری</a>
            </li>
            <li className="LinkHoverEffect">
              <a href="/">سوالات متداول</a>
            </li>
            <li className="LinkHoverEffect">
              <a href="/">تماس با ما</a>
            </li>
            <li className="LinkHoverEffect">
              <a href="/">درباره ما</a>
            </li>
          </ul>

          <div className="border-gray-500 border-b border-dashed h-1 mx-auto max-w-[200px] mt-4" />
          <button className="mr-auto bg-SecondaryGreen p-2 rounded-md text-gray-800 mt-5">
            پیگیری سفارشات
          </button>
        </div>
      </section>
      <div className="text-center bg-gray-300 text-gray-600 py-2">
        Designe By <span className="font-bold">SAMAN</span>
      </div>
    </section>
  );
};

export default Footer;
