const ProductCard = () => {
  return (
    <div className="w-64 bg-blue-100 border-2 border-blue-500 rounded-xl p-5 shadow-lg hover:bg-blue-200">
      <h3 className="text-xl font-bold text-blue-800">
        Mobile Phone
      </h3>

      <p className="text-gray-700 mt-3">
        Price: ₹20,000
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;