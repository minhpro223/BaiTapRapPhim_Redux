export default function Modal({
  content,
  isOpen,
  setIsOpen,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-11/12 max-w-4xl">

        <div className="flex justify-between items-center border-b p-5">

          <h2 className="text-2xl font-bold">
            {content.name}
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl hover:text-red-500"
          >
            ✕
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8">

          <img
            src={content.image}
            alt={content.name}
            className="w-full object-contain"
          />

          <div>

            <h3 className="text-3xl font-bold text-red-500">
              ${content.price}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              {content.description}
            </p>

            <p className="mt-5">
              <span className="font-bold">
                Quantity:
              </span>

              <span className="text-blue-600">
                {" "}{content.quantity}
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}