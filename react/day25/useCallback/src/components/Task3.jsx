import { useState, useMemo } from "react";

const initialProducts = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mobile", price: 20000, quantity: 2 },
  { id: 3, name: "Headphones", price: 2000, quantity: 1 },
];

const calculateTotal = (products) => {
  console.log("Calculating cart total...");

  return products.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );
};

const Task3 = () => {
  const [cart, setCart] = useState(initialProducts);
  const [dark, setDark] = useState(false);

  const total = useMemo(() => {
    return calculateTotal(cart);
  }, [cart]);

  const updateQuantity = (id, change) => {
    setCart((previousCart) =>
      previousCart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(0, product.quantity + change),
            }
          : product
      )
    );
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 text-gray-900 shadow-lg">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>

          <button
            onClick={() => setDark(!dark)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            {dark ? "Light Theme" : "Dark Theme"}
          </button>
        </div>

        <div className="space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-4"
            >
              <div>
                <h2 className="font-semibold">{product.name}</h2>
                <p className="text-gray-500">
                  ₹{product.price.toLocaleString("en-IN")} each
                </p>
                <p>Subtotal: ₹{(
                  product.price * product.quantity
                ).toLocaleString("en-IN")}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  disabled={product.quantity === 0}
                  className="rounded bg-red-500 px-3 py-1 text-white disabled:opacity-40"
                >
                  −
                </button>

                <span className="font-bold">{product.quantity}</span>

                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className="rounded bg-green-600 px-3 py-1 text-white"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-blue-50 p-4">
          <h2 className="text-xl font-bold text-blue-900">
            Total: ₹{total.toLocaleString("en-IN")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Task3;