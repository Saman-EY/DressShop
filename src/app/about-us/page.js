import Image from 'next/image';
import banner from '../../../public/images/aboutUs.png';

const page = () => {
  return (
    <section className="bg-[#FDFDFD] rounded-md w-full max-w-5xl p-4 mx-auto my-10 gap-5 flex">
      <div className="flex-1 text-gray-600 text-justify leading-8 my-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. <br /> کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. <br /> در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
        رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </div>
      <div className="flex-1">
        <Image
          className="w-full h-full rounded-md"
          src={banner}
          width={800}
          height={800}
          alt="banner"
        />
      </div>
    </section>
  );
};

export default page;
