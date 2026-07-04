export default function ProductItem({
  item,
  setProductDetail,
  setIsOpen,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl duration-300">

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-60 object-contain p-5"
      />

      <div className="p-5">

        <h3 className="font-bold text-lg h-14">
          {item.name}
        </h3>

        <p className="text-red-500 font-semibold text-xl">
          ${item.price}
        </p>

        <button
          onClick={() => {
            setProductDetail(item);
            setIsOpen(true);
          }}
          className="mt-4 w-full rounded-lg bg-black text-white py-2 hover:bg-gray-800"
        >
          View Detail
        </button>

      </div>

    </div>
  );
}