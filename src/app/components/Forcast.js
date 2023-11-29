"use client";
import { useEffect, useReducer, useState } from "react";
import useForcast from "../hooks/useForcast";
import WeatherCard from "./ui/WeatherCard";
import { useSelector } from "react-redux";
import formatTime from "../util/formatTime";
import filterForcast from "../util/filterForcast";

function Forcast() {
  const [weatherDetails, setWeatherDetails] = useState();
  const data = useSelector((state) => state.forcast.forcast);
  const sunrise = formatTime(data?.city?.sunrise);
  const sunset = formatTime(data?.city?.sunset);
  const dayWiseForcast = filterForcast(data.list);
  console.log(dayWiseForcast);
  // console.log("from new ", sunrise, sunset);
  return (
    <section className="mx-2 md:mx-0 flex md:flex-row flex-col md:gap-12 gap-6">
      <div className=" text-black py-2 md:mt-8">
        <div>
          <p className="text-xs">Select Date:</p>
          <input type="date" className="placeholder:text-red-300" />
        </div>
        <ul className="hidden md:flex  flex-col gap-3  text-sm  py-2">
          <li className=" border-[#ffffff]/0.2"></li>
          <li>High Temperature</li>
          <li>Low Temperature</li>
          <li>Humidity</li>
          <li>Sunrise Time</li>
          <li>Sunset Time</li>
        </ul>
      </div>
      <div className="flex md:flex-row flex-col md:flex-wrap md:gap-8 ">
        {dayWiseForcast?.map((data, i) => {
          return (
            <WeatherCard
              key={i}
              sunrise={sunrise}
              sunset={sunset}
              data={data}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Forcast;
