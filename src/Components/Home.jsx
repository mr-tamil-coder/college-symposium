import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center ">
      <div className="card1 bg-slate-300 w-11/12 h-52 flex justify-center items-center my-5 border border-s-orange-100">
        <h1>NCSE</h1>
      </div>
      <div
        onClick={() => {
          return <h1>Site is under </h1>;
        }}
        className="overflow-hidden whitespace-nowrap relative cursor-pointer card1 disabled:opacity-50 bg-slate-50 w-11/12 h-52 flex justify-center items-center my-5 border border-s-orange-100"
        disabled
      >
        <h1>Symposium</h1>

        <span className=" text-center absolute top-20 bg-amber-800 w-full  rotate-45">
        </span>
      </div>
    </div>
  );
};

export default Home;
