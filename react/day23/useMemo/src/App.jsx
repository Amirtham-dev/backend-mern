
import { useState, useEffect, useMemo } from "react";

const App = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );
        const data = await response.json();
        setProduct(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    return product.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [product, search]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Products
      </h1>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <p className="text-gray-600 mb-5">
        Products found: {filteredProducts.length}
      </p>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-64 overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="flex h-48 items-center justify-center bg-gray-50 p-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-contain transition duration-300 hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-700">
                  {item.category}
                </span>

                <h2 className="mt-3 line-clamp-2 min-h-12 text-lg font-bold text-gray-800">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm text-yellow-600">
                  ★ {item.rating}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xl font-bold text-green-600">
                    ${item.price}
                  </p>

                  <button
                    className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                    onClick={() => alert(item.title)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="py-10 text-center text-lg font-semibold text-red-500">
            No products found!
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
