import React from "react";
import Image from "next/image";

const Data = ({ information }) => {
  return (
    <div>
      <div className="relative flex p-4 w-max-[500px] justify-center items-center">
        <div className="flex-col">
          <img
            src={information.current.condition.icon}
            alt="weather icon"
            width={200}
            height={200}
          />
          <p className="font-bold text-2xl px-10">
            {information.current.condition.text}
          </p>
        </div>
        <p className="text-9xl ">{information.current.temp_c}°C</p>
      </div>
    </div>
  );
};

export default Data;
