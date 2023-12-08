"use client";
import WeatherCard from "./ui/WeatherCard";
import { useSelector } from "react-redux";
import filterForcast from "../util/filterForcast";
import { formatTime, formatToUnix } from "../util/formatDateandTime";
import { CardShimmer } from "./ui/Shimmer";
import usePastForecast from "../hooks/usePastForecast";
import PastWeatherCard from "./ui/PastWeatherCard";

function Forcast() {
  const data = useSelector((state) => state.forcast);
  const { setTimeStamp } = usePastForecast();
  const forcastData = data.forcast;
  const pastForcast = data.pastForcast;
  console.log(pastForcast);

  const sunrise = formatTime(forcastData?.city?.sunrise);
  const sunset = formatTime(forcastData?.city?.sunset);
  const dayWiseForcast = filterForcast(forcastData.list);
  function handleDate(e) {
    const timeStamp = formatToUnix(e.target.value);
    if (timeStamp < Math.floor(new Date().getTime() / 1000)) {
      setTimeStamp(timeStamp);
    }
  }
  return (
    <section className="mx-2 md:mx-0 flex md:flex-row  md:items-center flex-col md:gap-12 gap-6 ">
      <div className=" text-black py-2 md:mt-7 ">
        <div>
          <p className="text-xs">Select Date:</p>
          <input
            type="date"
            className="placeholder:text-red-300"
            onChange={handleDate}
          />
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
        {pastForcast?.hourly?.length > 0 ? (
          <PastWeatherCard
            sunrise={formatTime(pastForcast?.current?.sunrise)}
            sunset={formatTime(pastForcast?.current?.sunset)}
            main={pastForcast?.current?.weather[0]?.main}
            icon={pastForcast?.current?.weather[0]?.icon}
            humidity={pastForcast?.current?.humidity}
            temperature={pastForcast?.current?.temp}
          />
        ) : data.loading ? (
          Array(5)
            .fill("")
            .map((value, i) => {
              return <CardShimmer key={i} />;
            })
        ) : (
          dayWiseForcast?.map((data, i) => {
            return (
              <WeatherCard
                key={i}
                sunrise={sunrise}
                sunset={sunset}
                data={data}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default Forcast;
