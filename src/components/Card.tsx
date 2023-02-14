import React from "react";

const Card: React.FC = () => {
  return (
    <div className="w-96 flex flex-col items-center">
      <img
        className="w-full h-96 rounded-t-2xl "
        src="https://avatars.githubusercontent.com/u/48162731?v=4"
      />
      <div className="bg-light-card my-8 flex flex-col items-center">
        <h1 className="text-light-blackShade text-4xl font-semibold">
          İlkay Altınışık
        </h1>
        <h2 className="text-light-darkGrey text-2xl ">Product Manager</h2>
      </div>
      <button className="mb-16 w-44 py-4 rounded-xl bg-black text-white">
        Follow
      </button>
    </div>
  );
};

export default Card;
