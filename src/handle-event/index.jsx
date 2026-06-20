import React from "react";

export default function HandleEvent() {
  const handleDemoClick = () => {
    console.log("handleDemoClick");
  };
  const handleClickParams = (fullname)=>{
    console.log(`hello${fullname}`);
  };
  return (
    <div>
      <h1>HandleEvent</h1>
      <button onClick={handleDemoClick}>Demo Click</button>
      <button onClick={()=>handleClickParams("Nguyen")}>Demo click prams</button>
    </div>
  );
}
