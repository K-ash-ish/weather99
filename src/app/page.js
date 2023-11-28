import Forcast from "./components/Forcast";
import Navbar from "./components/Navbar";
import UserLocation from "./components/UserLocation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-[95vh] md:w-4/6 w-full mx-auto flex flex-col md:gap-10 gap-6">
        <UserLocation />
        <Forcast />
      </main>
    </>
  );
}
