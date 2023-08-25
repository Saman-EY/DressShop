'use client';
import { productsSlider2 } from '@/service/Datas';
import ProductSliderCard from './template/ProductSliderCard';

const ProductsList = () => {
  return (
    <section className=" bg-white  border rounded-sm mt-5 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4  ">
      {productsSlider2.map((item) => (
        <div className="border p-1 rounded-[2.9px] bg-white " key={item.id}>
          <ProductSliderCard {...item} />
        </div>
      ))}
    </section>
  );
};

export default ProductsList;
