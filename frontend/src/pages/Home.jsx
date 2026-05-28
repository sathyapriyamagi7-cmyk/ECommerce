import { useEffect, useState } from "react";
import API from "../services/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (product) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyExists = existingCart.find(
      (item) => item._id === product._id
    );

    if (alreadyExists) {
      alert("Product already in cart");
      return;
    }

    existingCart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    alert("Product added to cart");
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-2xl shadow-lg p-5 hover:scale-105 transition"
          >
            <img
              src={
                product.imageUrl ||
                "https://via.placeholder.com/300"
              }
              alt={product.name}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />

            <h2 className="text-2xl font-semibold">
              {product.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {product.description}
            </p>

            <h3 className="text-2xl font-bold mt-4">
              ₹{product.price}
            </h3>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;