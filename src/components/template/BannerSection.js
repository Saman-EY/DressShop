import Image from 'next/image';
import img1 from '../../../public/images/banner_1.png';
import img2 from '../../../public/images/banner_2.png';
import Link from 'next/link';

const BannerSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 mb-6">
      <picture className="flex-1">
        <Link href="/">
          <Image
            className=" h-full w-full rounded-lg "
            src={img1}
            width={1000}
            height={1000}
            alt="banner"
          />
        </Link>
      </picture>
      <picture className="flex-1">
        <Link href="/">
          <Image
            className="h-full w-full rounded-lg "
            src={img2}
            width={1000}
            height={1000}
            alt="banner"
          />
        </Link>
      </picture>
    </div>
  );
};

export default BannerSection;
