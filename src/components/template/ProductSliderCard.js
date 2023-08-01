import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProductSliderCard = ({ id, img, title, price, off }) => {
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
    <div className="shadow-md rounded-md overflow-hidden ">
      <Link href="/">
        <Image
          className="w-full h-full"
          src={img}
          width={500}
          height={500}
          alt="product"
        />
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
    </div>
  );
};

export default ProductSliderCard;
