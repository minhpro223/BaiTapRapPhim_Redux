import data from "./data.json";
import { useState } from "react";
export default function Glasses() {
  const [selectedGlass, setSelectedGlass] = useState(data[0]);

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10"
      style={{
        backgroundImage: "url('./glassesImage/background.jpg')",
      }}
    >
      <h1 className="text-center text-white text-3xl font-bold mb-10">
        TRY GLASSES APP ONLINE
      </h1>

      {/* Model */}
      <div className="flex justify-center gap-32 mb-12">
        {/* Left */}
        <div className="relative">
          <img src="./glassesImage/model.jpg" alt="" className="w-[250px]" />

          <img
            src={selectedGlass.url}
            alt=""
            className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[140px] opacity-80"
          />

          <div className="absolute bottom-0 left-0 w-full bg-orange-400/80 p-3">
            <h3 className="text-blue-700 font-semibold text-sm">
              {selectedGlass.name}
            </h3>

            <p className="text-white text-xs">Price: ${selectedGlass.price}</p>

            <p className="text-white text-xs">{selectedGlass.desc}</p>
          </div>
        </div>

        {/* Right */}
        <div>
          <img src="./glassesImage/model.jpg" alt="" className="w-[250px]" />
        </div>
      </div>

      {/* Glasses List */}
      <div className="bg-white w-[750px] mx-auto p-6 rounded">
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((glass) => (
            <img
              key={glass.id}
              src={glass.url}
              alt={glass.name}
              className="w-20 border p-1 cursor-pointer hover:scale-110 transition"
              onClick={() => setSelectedGlass(glass)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
