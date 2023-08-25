import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const ProductSliderCard = ({ id, img, title, price, off, newP, popular }) => {
  const [newPrice, setNewPrice] = useState();

  useEffect(() => {
    const RoundNums = (num) => {
      const base = 5000;
      const temp = Math.round(num / base) * base;

      return temp.toLocaleString();
    };

    if (off) {
      let discountَAmount = (price * off) / 100;
      let RoundedPrice = RoundNums(price - discountَAmount);
      setNewPrice(RoundedPrice);
    } else {
      setNewPrice(price);
    }
  }, [price, off]);

  return (
    <div className="shadow-md rounded-md overflow-hidden relative group h-full ">
      <Link href={`/store/${id}`}>
        <div>
          <Image
            className="w-full h-full"
            src={img}
            width={500}
            height={500}
            alt="product"
          />
        </div>
        <div className="p-3 text-sm text-gray-700">
          <p>{title}</p>
          <div className="flex gap-2 items-center">
            {off && (
              <p className="text-gray-400 line-through mt-2 numberFont text-xs">
                {price} تومان
              </p>
            )}
            <p className="text-red-500 mt-2 numberFont"> {newPrice} تومان </p>
          </div>
        </div>
      </Link>
      <button className="bg-gray-100 absolute transition-all duration-300 group-hover:left-0 top-0 -left-14 p-2 rounded-md bg-opacity-90 m-3 hover:bg-opacity-100">
        <LocalMallOutlinedIcon sx={{ color: '#545454' }} />
      </button>
      {newP && (
        <span className="bg-PrimaryGreen py-1 rounded-full absolute top-0 text-white text-xs px-3 m-2">
          جدید
        </span>
      )}
      {popular && (
        <span className="bg-purple-500 py-1 rounded-full absolute top-0 text-white text-xs px-3 m-2">
          محبوب
        </span>
      )}
    </div>
  );
};

export default ProductSliderCard;
