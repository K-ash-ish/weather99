import { data } from "@/app/constant";
import { kelvinToCelsius, kelvinToFahrenheit } from "@/app/util/convertTemp";
import filterForcast from "@/app/util/filterForcast";
import { formatDate } from "@/app/util/formatDateandTime";
import Image from "next/image";

function WeatherCard({
  sunrise,
  sunset,
  main,
  icon,
  humidity,
  temp_max,
  temp_min,
  date,
}) {
  const formattedDate = formatDate(date);
  const celsiusMax = Math.floor(kelvinToCelsius(temp_max));
  const fahrenheitMax = Math.floor(kelvinToFahrenheit(temp_max));
  const celsiusMin = Math.floor(kelvinToCelsius(temp_min));
  const fahrenheitMin = Math.floor(kelvinToFahrenheit(temp_min));
  return (
    <div className=" md:w-32 my-2 md:m-0 flex flex-col items-center">
      <h2 className="text-lg font-bold text-[#444444]">{formattedDate}</h2>
      <div className="w-full text-center bg-gradient-to-b from-[#464646] to-[#1D2540] text-white py-2 border-0 rounded-md">
        <div className="flex items-center justify-center border-gray-500 border-b-[1px]">
          <Image
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt="weather status"
            height={60}
            width={60}
          />
          {/* <Image alt="weather" src="/sunny.svg" height={60} width={60} /> */}
          <h2 className="text-xl pb-2  font-bold ">{main}</h2>
        </div>
        <ul className="flex md:flex-col flex-row justify-center gap-3 font-bold text-sm  py-2">
          <li className="flex flex-col  ">
            <p className="font-bold md:hidden ">High T</p>
            <p className="font-normal text-sm">
              {celsiusMax}C / {fahrenheitMax}F
            </p>
          </li>

          <li className="flex flex-col ">
            <p className="font-bold md:hidden">Low T</p>
            <p className="font-normal text-sm">
              {celsiusMin}C / {fahrenheitMin}F
            </p>
          </li>

          <li className="flex flex-col ">
            <p className="font-bold md:hidden">Humidity</p>
            <p className="font-normal text-sm">{humidity}%</p>
          </li>

          <li className="flex flex-col ">
            <p className="font-bold md:hidden">Sunrise</p>
            <p className="font-normal text-sm">{sunrise}</p>
          </li>

          <li className="flex flex-col ">
            <p className="font-bold md:hidden">Sunset</p>
            <p className="font-normal text-sm">{sunset}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherCard;
