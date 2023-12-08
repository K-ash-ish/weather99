"use client";
import Image from "next/image";
import { useState } from "react";
import useForcast from "../hooks/useForcast";
import formatCoordinates from "../util/formatCoordinates";
import { useDispatch, useSelector } from "react-redux";
import { SmallShimmer } from "./ui/Shimmer";
import { reset } from "../features/forcast/forcastSlice";
import useSearchLocation from "../hooks/useSearchLocation";
import useCurrentLocation from "../hooks/useCurrentLocation";

function UserLocation() {
  const [userInput, setUserInput] = useState("");
  useCurrentLocation();
  // useForcast(userInput);
  const { suggestions, setSuggestions } = useSearchLocation(userInput);
  // console.log(suggestions);
  // const suggestions = [
  //   {
  //     name: "Jabal",
  //     local_names: {
  //       en: "Jabal",
  //     },
  //     lat: 27.664939,
  //     lon: 66.237993,
  //     country: "PK",
  //     state: "Balochistan",
  //   },
  //   {
  //     name: "Jabal",
  //     local_names: {
  //       en: "Jabal",
  //       fr: "Jabal",
  //       ascii: "Jabal, Jabal",
  //       feature_name: "Jabal, Jabal",
  //       ar: "جبل",
  //       de: "Jabal",
  //     },
  //     lat: 31.1708952,
  //     lon: 45.7442726,
  //     country: "IQ",
  //     state: "Al-Muthanna Governorate",
  //   },
  //   {
  //     name: "Jabal",
  //     local_names: {
  //       en: "Jabal",
  //     },
  //     lat: 32.2905823,
  //     lon: 74.9772059,
  //     country: "PK",
  //     state: "Punjab",
  //   },
  //   {
  //     name: "Jabal",
  //     lat: 31.515438,
  //     lon: 77.1429062,
  //     country: "IN",
  //     state: "Himachal Pradesh",
  //   },
  //   {
  //     name: "Jabal",
  //     lat: 31.4572675,
  //     lon: 76.8466616,
  //     country: "IN",
  //     state: "Himachal Pradesh",
  //   },
  // ];
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forcast);
  const forcastData = data.forcast;
  const coordinates = formatCoordinates(
    forcastData?.city?.coord?.lat,
    forcastData?.city?.coord?.lon
  );
  const { setCoordinates } = useForcast();
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleLocation = (e) => {
    const latitude = e.target.getAttribute("data-lat");
    const longitude = e.target.getAttribute("data-lon");
    setCoordinates(() => {
      return { lat: latitude, lon: longitude };
    });

    setSuggestions("");
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
          onChange={handleInput}
          type="text"
          placeholder="Search your city here..."
          className="bg-white placeholder:italic placeholder:text-sm placeholder:text-[#444444] px-3 py-2 rounded-md border-0 w-72 shadow-sm "
        />
        {suggestions.length > 0 && (
          <div className="bg-white p-2 w-72 absolute top-12">
            <ul className="h-auto">
              {suggestions?.map((city, index) => {
                return (
                  <li
                    key={index}
                    onClick={handleLocation}
                    data-lat={city?.lat}
                    data-lon={city?.lon}
                    className="py-2 border-b-2 cursor-pointer hover:bg-slate-100"
                  >
                    {city.name}, {city.state}, {city.country}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {/* {userInput.length >= 3 && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute  right-12  bottom-3 font-thin text-sm text-red-500"
          >
            clear
          </button>
        )} */}
      </div>
    </div>
  );
}

export default UserLocation;
