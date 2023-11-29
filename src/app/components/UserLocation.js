"use client";
import Image from "next/image";
import { useState } from "react";
import useForcast from "../hooks/useForcast";
import formatCoordinates from "../util/formatCoordinates";
import { useDispatch, useSelector } from "react-redux";
import { SmallShimmer } from "./ui/Shimmer";
import { reset } from "../features/forcast/forcastSlice";

function UserLocation() {
  const [userInput, setUserInput] = useState("");
  useForcast(userInput);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forcast);
  const forcastData = data.forcast;
  const coordinates = formatCoordinates(
    forcastData?.city?.coord?.lat,
    forcastData?.city?.coord?.lon
  );
  const handleLocation = (e) => {
    setUserInput(e.target.value);
  };
  const handleClear = (e) => {
    dispatch(reset());
    setUserInput("");
  };

  return (
    <div className="border-b-2 mx-4 border-black/[0.2] flex flex-col-reverse gap-4 md:flex-row md:justify-between md:mt-14 mt-8 md:pb-1">
      <div className="md:mx-0 ">
        <div className="text-[#1D2540] font-bold text-xl flex gap-1">
          <Image
            alt="location-img"
            src="/location.svg"
            height={24}
            width={24}
          />
          {data.loading ? <SmallShimmer /> : <h3>{forcastData?.city?.name}</h3>}
        </div>
        {data.loading ? (
          <SmallShimmer />
        ) : (
          <p className="text-[#606060] text-sm mt-1">{coordinates}</p>
        )}
      </div>
      <div className="relative  w-72 md:flex md:flex-row  md:items-center ">
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
        {userInput.length >= 3 && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute  right-12  bottom-3 font-thin text-sm text-red-500"
          >
            clear
          </button>
        )}
      </div>
    </div>
  );
}

export default UserLocation;
