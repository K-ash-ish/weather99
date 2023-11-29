"use client";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";
import useForcast from "../hooks/useForcast";
import formatCoordinates from "../util/formatCoordinates";
import { useSelector } from "react-redux";

function UserLocation() {
  const [userInput, setUserInput] = useState("");
  const [weatherDetails, setWeatherDetails] = useState();
  useForcast(userInput);
  const data = useSelector((state) => state.forcast.forcast);
  const coordinates = formatCoordinates(
    data?.city?.coord?.lat,
    data?.city?.coord?.lon
  );
  const handleLocation = (e) => {
    setUserInput(e.target.value);
    
  };

  return (
    <div className="border-b-2 mx-4 border-black/[0.2] flex flex-col-reverse gap-4 md:flex-row md:justify-between md:mt-14 mt-8 md:pb-1">
      <div className="md:mx-0">
        <div className="text-[#1D2540] font-bold text-xl flex gap-1">
          <Image
            alt="location-img"
            src="/location.svg"
            height={24}
            width={24}
          />
          <h3>{data?.city?.name}</h3>
        </div>
        <p className="text-[#606060] text-sm mt-1">{coordinates}</p>
      </div>
      <div className="relative  w-72 md:flex md:flex-row  md:items-center">
        <Image
          alt="search-img"
          className="absolute bottom-2 right-4"
          src={"/search.svg"}
          height={24}
          width={24}
        />
        <input
          value={userInput}
          onChange={handleLocation}
          type="text"
          placeholder="Search your city here..."
          className="bg-white placeholder:italic placeholder:text-sm placeholder:text-[#444444] px-3 py-2 rounded-md border-0 w-72 shadow-sm "
        />
      </div>
    </div>
  );
}

export default UserLocation;
