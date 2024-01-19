import React from "react";
import { useData } from "../context/DataContext";

function Header() {
  const { data,setPage } = useData();
  const name = data?.name || "Default Name"; // Provide a default name if data.name is undefined

  const handleBack = ()=>{
    setPage('home')
  }

  return (
    <div className="flex justify-between flex-row p-3 h-20  items-center">
      <div className="flex flex-row pl-8">
        <img className="w-10 h-10 mr-5 shrink-0" src="/images/Back.png" alt="back" onClick={()=>handleBack} />
        <img className="w-10 h-10 shrink-0" src="/images/Forward.png" alt="forward"/>
      </div>
      <div className="mr-10 h-11 border-black items-center justify-center rounded-3xl w-auto bg-black">
        <p className="text-white p-3">{name}</p>
      </div>
    </div>
  );
}

export default Header;
