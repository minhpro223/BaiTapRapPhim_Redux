import React from "react";

export default function RenderingElement() {
  const username = "Nguyen";
  const titile = " Noi tinh yeu bat dau";
  const desciption = "Lorem........";

  const renderSong = () => {
    return (
      <div>
        <h1>Tên Bài hát : {titile}</h1>
        <p>Lời bài hát: {desciption}</p>
      </div>
    );
  };
  return (
    <div>
      <h1>RenderingElemnt</h1>
      <div>Tên : {username}</div>
      {renderSong()}
    </div>
  );
}
