import Navbar from "./components/Navbar";
import UserLocation from "./components/UserLocation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-[95vh] w-5/6 mx-auto flex flex-col gap-10">
        <UserLocation />
        <div>Hello</div>
      </main>
    </>
  );
}
