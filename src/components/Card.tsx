import React from "react";
import { CiLocationOn } from "react-icons/ci";
interface CardProps {
  userData: any;
}
const Card = (porps: CardProps) => {
  const { userData } = porps;
  console.log(userData);
  return (
    <div className="bg-light-card w-96 flex flex-col items-center">
      <img
        className="w-full h-96 rounded-t-2xl "
        src={`${userData.avatar_url}`}
      />
      <div className="my-8 flex flex-col items-center">
        <h1 className="text-light-blackShade dark:text-dark-white text-4xl font-semibold">
          {userData.name}
        </h1>
        <h2 className="text-light-darkGrey text-2xl ">{userData.bio}</h2>{" "}
        <h2 className="text-light-darkGrey text-2xl flex justify-center items-center gap-2">
          <CiLocationOn />
          {userData.location}
        </h2>
      </div>

      <div className=" grid grid-rows-2 grid-flow-col gap-4 ">
        <div className="text-light-blackShade text-xl bg-light-card h-20 w-32 flex items-center justify-center gap-2">
          {userData.followers}
          <h2>Followers</h2>
        </div>
        <div className="text-light-blackShade text-xl bg-light-card h-20 w-32 flex items-center  justify-center gap-2">
          {userData.following}
          <h2>Following</h2>
        </div>
        <div className="text-light-blackShade text-xl bg-light-card h-20 w-32 flex items-center justify-center gap-2">
          {userData.public_repos}
          <h2>Repo</h2>
        </div>
        <div className="text-light-blackShade text-xl bg-light-card h-20 w-32 flex items-center justify-center gap-2">
          {userData.public_gists}
          <h2>Gist</h2>
        </div>
      </div>

      <div className="my-8 flex justify-center items-center gap-8">
        <a
          className="w-44 py-4 text-center rounded-xl bg-black dark:bg-dark-white text-white dark:text-dark-blackShade"
          target="_blank"
          href={`https://github.com/${userData.login}`} rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
