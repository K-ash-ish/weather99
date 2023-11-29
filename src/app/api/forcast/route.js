import { NextResponse } from "next/server";

export async function GET(request, res) {
  const city = request.nextUrl.searchParams.get("value");
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`
  );
  const dataJson = await data.json();
  return NextResponse.json(dataJson);
}
