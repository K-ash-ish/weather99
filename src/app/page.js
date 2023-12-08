"use client";
import { Provider } from "react-redux";
import Forcast from "./components/Forcast";
import Navbar from "./components/Navbar";
import UserLocation from "./components/UserLocation";
import { store } from "./store";
import useCurrentLocation from "./hooks/useCurrentLocation";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <main className="h-[95vh] md:w-4/6 w-full mx-auto flex flex-col md:gap-10 gap-6">
          <UserLocation />
          <Forcast />
        </main>
      </Provider>
    </>
  );
}
