"use client";
import WeatherCard from "./ui/WeatherCard";
import { useSelector } from "react-redux";
import filterForcast from "../util/filterForcast";
import { formatTime } from "../util/formatDateandTime";
import { CardShimmer } from "./ui/Shimmer";

function Forcast() {
  const data = useSelector((state) => state.forcast);
  const forcastData = data.forcast;
  const sunrise = formatTime(forcastData?.city?.sunrise);
  const sunset = formatTime(forcastData?.city?.sunset);
  const dayWiseForcast = filterForcast(forcastData.list);
  return (
    <section className="mx-2 md:mx-0 flex md:flex-row  md:items-center flex-col md:gap-12 gap-6 ">
      <div className=" text-black py-2 md:mt-7 ">
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
        {data.loading
          ? Array(5)
              .fill("")
              .map((value, i) => {
                return <CardShimmer key={i} />;
              })
          : dayWiseForcast?.map((data, i) => {
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
