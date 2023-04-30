import React from "react";

function Saber(props) {
  return (
    <span className={`flex gap-1 items-center group ${props.className}`}>
      <div
        className={`w-5 h-1 bg-gray-400 rounded-full group-hover:bg-yellow-500 ${props.className}:group-hover:shadow-white ${props.className}:group-hover:shadow-2xl`}
      ></div>
      <div className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-yellow-500 "></div>
    </span>
  );
}

export default Saber;
