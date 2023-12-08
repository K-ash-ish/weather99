import { NextResponse } from "next/server";

export async function GET(request, res) {
  const lat = request.nextUrl.searchParams.get("lat");
  const lon = request.nextUrl.searchParams.get("lon");
  const date = request.nextUrl.searchParams.get("date");
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${date}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`
  );
  const dataJson = await data.json();
  return NextResponse.json(dataJson);
}
