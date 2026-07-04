import { useState } from "react";
import ProductList from "./product-list";
import Modal from "./modal";
import data from "./data.json";

export default function ShoesStore() {
  const [productDetail, setProductDetail] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-4xl font-bold text-center mb-10">
          Shoes Shop
        </h1>

        <ProductList
          productsData={data}
          setProductDetail={setProductDetail}
          setIsOpen={setIsOpen}
        />

        <Modal
          content={productDetail}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

      </div>
    </div>
  );
}