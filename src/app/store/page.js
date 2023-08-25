import ProductsList from '@/components/ProductsList';
import StoreSidebar from '@/components/StoreSidebar';
import StoreBreadcrump from '@/components/template/StoreBreadcrump';

const page = () => {
  return (
    <section className="xs:grid grid-cols-12 gap-10 max-w-7xl mx-auto my-10">
      <section className="hidden md:block md:col-span-3 ">
        <StoreSidebar />
      </section>

      <section className="col-span-12 xs:col-span-12 md:col-span-9 p-2">
        <StoreBreadcrump />
        <ProductsList />
      </section>
    </section>
  );
};

export default page;
