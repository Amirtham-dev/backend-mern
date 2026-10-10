
import { useState } from "react";

const Task4 = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Phone", price: 20000, inStock: false },
    { id: 3, name: "Tablet", price: 15000, inStock: true },
  ]);

  const toggleStock = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, inStock: !product.inStock }
          : product
      )
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Task 4: Product Inventory
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl mb-3">
              {product.name === "Laptop"
                ? "💻"
                : product.name === "Phone"
                ? "📱"
                : "📟"}
            </div>

            <h3 className="text-lg font-bold text-gray-800">
              {product.name}
            </h3>

            <p className="text-gray-600 mt-1">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${
                product.inStock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>

            <button
              onClick={() => toggleStock(product.id)}
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition"
            >
              Toggle Stock
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task4;
