import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");

    window.location.reload();
  };

  return (
    <BrowserRouter>
      <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          E-Store
        </h1>

        <div className="flex gap-6 items-center">
          <Link to="/">Home</Link>

          <Link to="/cart">Cart</Link>

          {userInfo ? (
            <>
              <span>{userInfo.name}</span>

              <button
                onClick={logoutHandler}
                className="bg-red-500 px-4 py-1 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>

              <Link to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;