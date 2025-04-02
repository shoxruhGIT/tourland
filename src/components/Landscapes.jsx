import React from "react";

const Landscapes = () => {
  return (
    <div>
      <h1></h1>
      <p></p>
      <div className="flex items-center justify-center gap-8">
        <div
          className="flex items-end justify-start rounded-3xl h-[400px] w-[9%] p-3 bg-cover bg-center cursor-pointer transition-all duration-500 "
          style={{ backgroundImage: 'url("./assets/china.jpg")' }}
        ></div>
      </div>
    </div>
  );
};

export default Landscapes;
