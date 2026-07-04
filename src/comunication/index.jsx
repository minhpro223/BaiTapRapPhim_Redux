import { useState } from "react";
import ChildCompoment from "./child";
export default function Communication() {
  const [username, setUsername] = useState("Minh");
  const [age,setAge] = useState(10);
  const handleChangeUsername =() =>{
    setUsername("Nguyen")
  }
  const onHandleResetUsername = (data) =>{
    console.log(data);
  };
  return (
    <div>
      <h1>Communication</h1>
      <p>Username :{username}</p>
      <button onClick={handleChangeUsername} className="text-white bg-blue-500 box-border px-4 py-2.5">Change Username</button>
      <h1>Age :{age}</h1>

      <ChildCompoment username={username} age={age}
      onHandleResetUsername={onHandleResetUsername}/>
    </div>
  );
}
//truyen du lieu tu data tu cha => compoment con
