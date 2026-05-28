import { useEffect, useState } from "react";
import API from "../services/api";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item._id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const checkoutHandler = async () => {
    if (!userInfo) {
      alert("Please login first");
      return;
    }

    try {
      const orderItems = cart.map((item) => ({
        product: item._id,
        quantity: 1
      }));

      await API.post(
        "/orders",
        {
          orderItems,
          totalPrice
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        }
      );

      alert("Order placed successfully");

      localStorage.removeItem("cart");

      setCart([]);
    } catch (error) {
      console.log(error);

      alert("Checkout failed");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-xl">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="border rounded-2xl shadow-lg p-5 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-2xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-600">
                    {item.description}
                  </p>

                  <h3 className="text-xl font-bold mt-2">
                    ₹{item.price}
                  </h3>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-bold">
              Total: ₹{totalPrice}
            </h2>

            <button
              onClick={checkoutHandler}
              className="mt-4 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;