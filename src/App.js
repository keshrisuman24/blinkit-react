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

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="app relative">
      <ScrollToTop />
      <Header openCart={toggleSidebar} />
      <Outlet />
      <Footer />

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={toggleSidebar}
          aria-hidden="true"
          data-testid="overlay"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[400px] bg-white text-black transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20 shadow-lg`}
        aria-label="Shopping cart sidebar"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <div className="p-4 relative h-full flex flex-col">
          <h2 className="text-[16px] font-poppins font-bold mb-4">My Cart</h2>

          <button
            onClick={toggleSidebar}
            aria-label="Close cart sidebar"
            className="absolute top-4 right-4 text-black font-poppins font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            <img
              src={require("../src/assets/Images/close.png")}
              alt="Close"
              className="h-[15px] w-[15px] mt-2"
            />
          </button>

          {/* Sidebar content goes here */}

        </div>
      </aside>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/categoryDetail", element: <CategoryDetail /> },
      { path: "/categoryDetail/productDetail", element: <ProductDetail /> },
      { path: "/comingsoon", element: <ComingSoon /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
