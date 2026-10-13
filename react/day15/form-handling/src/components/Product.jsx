import { useState } from "react";

function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: ""
  });

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || form.price === "" || form.quantity === "") return;

    if (editId !== null) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editId ? { ...product, ...form } : product
        )
      );
      setEditId(null);
    } else {
      setProducts((prev) => [
        ...prev,
        { ...form, id: Date.now() }
      ]);
    }

    setForm({ name: "", price: "", quantity: "" });
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      quantity: product.quantity
    });
    setEditId(product.id);
  };

  const inputStyle =
    "w-full rounded-lg border border-slate-300 p-3 focus:border-emerald-500 focus:outline-none";

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-bold text-emerald-800 text-center">
        Product Form
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-3">
        <input className={inputStyle} name="name" placeholder="Product Name"
          value={form.name} onChange={handleChange} required />

        <input className={inputStyle} name="price" type="number" min="0"
          placeholder="Price" value={form.price}
          onChange={handleChange} required />

        <input className={inputStyle} name="quantity" type="number" min="0"
          placeholder="Quantity" value={form.quantity}
          onChange={handleChange} required />

        <button className="rounded-lg bg-emerald-600 p-3 font-semibold text-white hover:bg-emerald-700 sm:col-span-3">
          {editId !== null ? "Update Product" : "Add Product"}
        </button>
      </form>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <div key={product.id}
            className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="mt-2 text-slate-600">Price: ₹{product.price}</p>
            <p className="text-slate-600">Quantity: {product.quantity}</p>
            <button type="button" onClick={() => handleEdit(product)}
              className="mt-3 rounded-lg bg-amber-500 px-4 py-2 text-white hover:bg-amber-600">
              Edit Product
            </button>
          </div>
        ))}

        {products.length === 0 && (
          <p className="text-slate-500">No products added yet.</p>
        )}
      </div>
    </div>
  );
}

export default ProductForm;