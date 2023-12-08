import { NextResponse } from "next/server";

export async function GET(req, res) {
  const searchedCity = req.nextUrl.searchParams.get("q");

  const suggestions = await fetch(
    ` https://api.openweathermap.org/geo/1.0/direct?limit=10&APPID=${process.env.NEXT_PUBLIC_WEATHER_API}&q=${searchedCity}`
  );
  const suggestionsJson = await suggestions.json();
  return NextResponse.json(suggestionsJson);
}
