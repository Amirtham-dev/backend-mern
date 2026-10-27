import { useState, useEffect, useMemo } from "react";

const filterProducts = (products, search) => {
  console.log("Filtering products...");

  return products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
};

const Task2 = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return filterProducts(products, search);
  }, [products, search]);

  if (loading) {
    return (
      <h2 className="mt-10 text-center text-xl font-bold">
        Loading products...
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Product Search
        </h1>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search product by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-5 w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-blue-500"
        />

        {/* Counter */}
        <div className="mb-6 flex items-center justify-between rounded-lg bg-white p-4 shadow">
          <p className="font-semibold">Counter: {count}</p>

          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Increment
          </button>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:shadow-lg"
            >
              <p className="mb-2 text-gray-500">
                ID: {product.id}
              </p>

              <h2 className="mb-3 text-lg font-bold text-gray-800">
                Name: {product.title}
              </h2>

              <p className="text-lg font-semibold text-green-600">
                Price: ₹{product.price}
              </p>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-8 text-center text-lg text-red-500">
            No products found!
          </p>
        )}
      </div>
    </div>
  );
};

export default Task2;