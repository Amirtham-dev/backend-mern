import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <section>

      <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Home Page
      </h2>
      </div>
      <div className="flex flex-row gap-4 justify-content-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Home;