import WeatherCard from "./ui/WeatherCard";

function Forcast() {
  return (
    <section className="mx-2 md:mx-0 flex md:flex-row flex-col   md:gap-12 gap-6">
      <div className=" text-black py-2 md:mt-4">
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
        {Array(5)
          .fill("")
          .map((value, i) => {
            return <WeatherCard key={i} />;
          })}
      </div>
    </section>
  );
}

export default Forcast;
