import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility state

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Button to toggle sidebar outside of sidebar */}
      

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-2xl">Sidebar Content</h2>
          <p>This sidebar takes up the full height of the viewport.</p>

          {/* Close button inside sidebar */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
