import ListPhone from "./list-phone";
import Detail from "./detail";
import data from "./data.json";
import { useState } from "react";
export default function ShoppingPhone() {
  const [listPhone, setListPhone] = useState(data);
  const [selectedPhone, setSelectedPhone] = useState(null);

  //ham nhan giu lieu tu compoment Phone
  const handleDetailPhone = (phone) => {
    setSelectedPhone(phone);
  };
  return (
    <div>
      <h1>* ShoppingPhone</h1>
      <ListPhone listPhone={listPhone} onDetailPhone={handleDetailPhone} />
      <Detail selectedPhone={selectedPhone} />;
    </div>
  );
}
