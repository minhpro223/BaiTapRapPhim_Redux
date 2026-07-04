import ProductItem from "./ProductItem";

export default function ProductList({
  productsData,
  setProductDetail,
  setIsOpen,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productsData.map((product) => (
        <ProductItem
          key={product.id}
          item={product}
          setProductDetail={setProductDetail}
          setIsOpen={setIsOpen}
        />
      ))}
    </div>
  );
}