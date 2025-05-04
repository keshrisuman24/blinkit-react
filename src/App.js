import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CategoryDetail from "./components/CategoryDetail";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import ComingSoon from "./components/ComingSoon";
import ScrollToTop from "./components/ScrollToTop";

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility state

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app relative">
      <ScrollToTop />
      <Header openCart={() => toggleSidebar()} />
      <Outlet />
      <Footer />

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={toggleSidebar} // Clicking the overlay will close the sidebar
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[400px] bg-white text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="p-4">
          <h2 className="text-[16px] text-black font-poppins font-bold">
            My Cart
          </h2>

          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-black font-poppins font-bold"
          >
            <img
              src={require("../src/assets/Images/close.png")}
              className="h-[15px] w-[15px] mt-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/categoryDetail",
        element: <CategoryDetail />,
      },
      {
        path: "/categoryDetail/productDetail",
        element: <ProductDetail />,
      },
      {
        path: "/comingsoon",
        element: <ComingSoon />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
