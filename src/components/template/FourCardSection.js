import Image from 'next/image';
import banner1 from '../../../public/images/miniB1.png';
import banner2 from '../../../public/images/miniB2.png';
import banner3 from '../../../public/images/miniB3.png';
import banner4 from '../../../public/images/miniB4.png';
import Link from 'next/link';

const FourCardSection = () => {
  return (
    <section className="grid px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-6 mb-2 ">
      <div className="rounded-xl overflow-hidden transition-all  duration-300 ease-in-out hover:scale-95 hover:opacity-90 max-w-md mx-auto">
        <Link href="/">
          <Image
            className="w-full h-full"
            src={banner1}
            width={1000}
            height={1000}
            alt="bannerCard"
          />
        </Link>
      </div>
      <div className="rounded-xl overflow-hidden transition-all  duration-300 ease-in-out hover:scale-95 hover:opacity-90 max-w-md mx-auto">
        <Link href="/">
          <Image
            className="w-full h-full"
            src={banner2}
            width={1000}
            height={1000}
            alt="bannerCard"
          />
        </Link>
      </div>
      <div className="rounded-xl overflow-hidden transition-all  duration-300 ease-in-out hover:scale-95 hover:opacity-90 max-w-md mx-auto">
        <Link href="/">
          <Image
            className="w-full h-full"
            src={banner3}
            width={1000}
            height={1000}
            alt="bannerCard"
          />
        </Link>
      </div>
      <div className="rounded-xl overflow-hidden transition-all  duration-300 ease-in-out hover:scale-95 hover:opacity-90 max-w-md mx-auto">
        <Link href="/">
          <Image
            className="w-full h-full"
            src={banner4}
            width={1000}
            height={1000}
            alt="bannerCard"
          />
        </Link>
      </div>
    </section>
  );
};

export default FourCardSection;
