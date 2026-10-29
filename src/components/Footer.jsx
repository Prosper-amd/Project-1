import React from "react";

const Footer = () => {
  return (
    <Footer className="flex bg-black text-white justify-between items-center px-20 py-5">
      <div>
        <h1 className="text-2xl">PROSPER</h1>
        <p className="text-xl">
          This is a website where you can order for varieties of hats{" "}
        </p>
      </div>
      <div className="flex gap-4 justify-end bg-gray-500 h-full">
        <p className="text-sm">TERMS AND CONDITION.</p>
        <p className="text0-sm">PRIVACY AND POLICY.</p>
      </div>
    </Footer>
  );
};

export default Footer;
