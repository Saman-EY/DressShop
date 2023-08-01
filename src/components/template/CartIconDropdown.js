import ShoppingBag2 from '@/icons/shoppingBag';

const CartIconDropdown = ({left}) => {
  return (
    <section className={`bg-white p-4 hidden w-96 absolute top-32 ${left && "left-0"}  z-30 invisible opacity-0 rounded-md group-hover:visible group-hover:opacity-100 group-hover:top-7 duration-[400ms] transition-all border-2 md:flex flex-col items-center gap-5 cursor-default`}>
      <ShoppingBag2 />

      <span className="bg-green-600 text-white p-3 text-xs rounded-md hover:bg-green-700 transition-all cursor-pointer">
        هیچ محصولی در سبد خرید نیست
      </span>
    </section>
  );
};

export default CartIconDropdown;
