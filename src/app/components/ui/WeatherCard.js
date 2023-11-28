import Image from "next/image";

function WeatherCard() {
  return (
    <div className=" md:w-32 my-2 md:m-0 flex flex-col items-center">
      <h2 className="text-lg font-bold text-[#444444]">20 Jan 2023</h2>
      <div className="w-full text-center bg-gradient-to-b from-[#464646] to-[#1D2540] text-white py-2 border-0 rounded-md">
        <div className="flex items-center justify-center border-gray-500 border-b-[1px]">
          <Image src="/sunny.svg" height={60} width={60} />
          <h2 className="text-xl pb-2  font-bold ">Sunny</h2>
        </div>
        <ul className="flex md:flex-col flex-row justify-center gap-3 font-bold text-sm  py-2">
          <li className="flex flex-col  ">
            <p className="font-bold md:hidden ">High T</p>
            <p className="font-normal text-sm">23 C/63 F</p>
          </li>

          <li className="flex flex-col ">
            <p className="font-bold md:hidden">Low T</p>
            <p className="font-normal text-sm">23 C/63 F</p>
          </li>

          <li className="flex flex-col ">
            <p className="font-bold md:hidden">Humidity</p>
            <p className="font-normal text-sm">76%</p>
          </li>

          <li className="flex flex-col ">
            <p className="font-bold md:hidden">Sunrise</p>
            <p className="font-normal text-sm">06:21 AM</p>
          </li>

          <li className="flex flex-col ">
            <p className="font-bold md:hidden">Sunset</p>
            <p className="font-normal text-sm">06:21 AM</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherCard;
