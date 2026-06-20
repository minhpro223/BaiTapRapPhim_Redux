import React from "react";
import { useState } from "react";

export default function ExampleCar() {
  const [url,setUrl] = useState("./images/red-car.jpg");
  // const handleRed = ()=>{
  //   setUrl("./images/red-car.jpg");
  // }
  //  const handleBlack = ()=>{
  //   setUrl("./images/black-car.jpg");
  // }
  // const handSliver = ()=>{
  //   setUrl("./images/silver-car.jpg");
  // }
  const handleChangeUrl = (url)=>{
    setUrl(url);
  }
  return (
    <div>
      <h1>ExampleCar</h1>
      
      <div className="grid grid-cols-2"></div>
      <div>
        <img src={url} alt=""></img>
      </div>
      <button
      onClick={()=>handleChangeUrl("./images/red-car.jpg")}
        type="button"
        class="text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Đỏ
      </button>
      <button
      onClick={()=>handleChangeUrl("./images/black-car.jpg")}
        type="button"
        class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Đen
      </button>
      <button
      onClick={()=>handleChangeUrl("./images/silver-car.jpg")}
        type="button"
        class="text-white bg-dark box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Sliver
      </button>
    </div>
  );
}
