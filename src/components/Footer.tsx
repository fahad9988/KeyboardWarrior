import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-8">
      <p className="text-sm text-center">
        Made with ❤️ by your name &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;