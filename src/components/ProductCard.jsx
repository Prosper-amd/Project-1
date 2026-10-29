import React from 'react'

const ProductCard = ({ hatImage, duck, heading, content}) => {
  return (
    <div className="bg-white text-black p-6 gap-8 flex flex-col items-center">
      {/* Top div */}
      <div>
        <img src={hatImage} alt="" />
      </div>
      {/* Bottom div */}
      <div className="text-center gap-2 flex flex-col">
        <h1>{duck}</h1>
        <p>{heading}</p>
        <p>{content}</p>
        <div>
          <button className="bg-amber-600 text-white rounded-lg hover:bg-amber-800 transition-300 py-2 px-4">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
