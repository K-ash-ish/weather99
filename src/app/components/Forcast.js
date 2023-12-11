"use client";
import WeatherCard from "./ui/WeatherCard";
import { useSelector } from "react-redux";
import filterForcast, { filterForcastByDate } from "../util/filterForcast";
import { formatTime, formatToUnix } from "../util/formatDateandTime";
import { CardShimmer } from "./ui/Shimmer";
import usePastForecast from "../hooks/usePastForecast";
import { useEffect, useState } from "react";

function Forcast() {
  const data = useSelector((state) => state.forcast);
  const [dayWiseForcast, setDayWiseForcast] = useState();
  const [pastDate, setPastDate] = useState(false);
  const { setTimeStamp } = usePastForecast();
  const forcastData = data?.forcast;
  const pastForcast = data?.pastForcast;

  const sunrise = formatTime(forcastData?.city?.sunrise);
  const sunset = formatTime(forcastData?.city?.sunset);
  // const dayWiseForcast = filterForcast(forcastData?.list);

  useEffect(() => {
    setDayWiseForcast(filterForcast(forcastData?.list));
  }, [data?.forcast]);

  function handleDate(e) {
    const timeStamp = formatToUnix(e.target.value);
    const selectedDate = e.target.value.split("-")[2];
    const currentDate = new Date().getDate();

    if (selectedDate < currentDate) {
      console.log("i'm in");
      setPastDate(true);
      setTimeStamp(timeStamp);
    } else if (selectedDate >= currentDate) {
      const forcastForDate = filterForcastByDate(forcastData, selectedDate);
      setPastDate(false);
      setDayWiseForcast([forcastForDate]);
    }
  }

  return (
    <section className="mx-2 md:mx-0 flex md:flex-row  flex-col md:gap-12 gap-6 ">
      <div className=" text-black py-3 md:mt-7 ">
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
        {pastDate ? (
          <WeatherCard
            sunrise={formatTime(pastForcast?.current?.sunrise)}
            sunset={formatTime(pastForcast?.current?.sunset)}
            main={pastForcast?.current?.weather[0]?.main}
            icon={pastForcast?.current?.weather[0]?.icon}
            humidity={pastForcast?.current?.humidity}
            temp_max={pastForcast?.current?.temp}
            temp_min={pastForcast?.current?.temp}
            date={pastForcast?.current?.dt}
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
                main={data?.weather[0]?.main}
                icon={data?.weather[0]?.icon}
                humidity={data?.main?.humidity}
                temp_max={data?.main?.temp_max}
                temp_min={data?.main?.temp_min}
                date={data?.dt}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default Forcast;
