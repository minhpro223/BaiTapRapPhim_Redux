import React from "react";
import { useState } from "react";

export default function ExampleLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const handlLogin = () =>{
    setIsLogin(true);
  };
  const hadlLogout =()=>{
    setIsLogin(false);
  };
  const renderLogin = () => {
    return (
      <div>
        <h1>vui long dang nhap</h1>

        <button 
          onClick={handlLogin}
          type="button"
          className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Login
        </button>
      </div>
    );
  };
  const renderLogout = () => {
    return (
      <div>
        <h1>Hello User</h1>
        <button
         onClick={hadlLogout}
          type="button"
          className="text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Logout
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>ExampleLogin</h1>
      {isLogin ? renderLogout():renderLogin()}

    </div>
  );
}
