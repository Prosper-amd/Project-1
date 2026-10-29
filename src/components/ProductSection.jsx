import React from "react";
import Hat1 from "../assets/hat1.png";
import Hat2 from "../assets/hat2.png";
import Hat3 from "../assets/hat3.png";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <section className="bg-[#f9f9f9] flex flex-col justify-center items-center gap-14 lg:px-20 px-5 py-12 min-h-screen">
      <div>
        <h1 className="lg:text-4xl text-2xl text-bold">POPULAR PRODUCT</h1>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 pb-14">
        <ProductCard
          hatImage={Hat1}
          duck="Green Hat"
          heading="Made by Olutayo Priscillar"
          content="$10"
        />
        <ProductCard
          hatImage={Hat2}
          duck="Blue Hat"
          heading="Made by Abosede Oluronke"
          content="$15"
        />
        <ProductCard
          hatImage={Hat3}
          duck="Paforated Hat"
          heading="Made by Olaoluwa"
          content="#20"
        />
      </div>
    </section>
  );
};

export default ProductSection;
