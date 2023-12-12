import { NextResponse } from "next/server";

export async function GET(req, res) {
  const searchedCity = req.nextUrl.searchParams.get("q");

  const suggestions = await fetch(
    ` https://api.openweathermap.org/geo/1.0/direct?limit=10&APPID=${process.env.NEXT_PUBLIC_WEATHER_API}&q=${searchedCity}`
  );
  const suggestionsJson = await suggestions.json();
  if (suggestionsJson.length === 0) {
    return NextResponse.json({ message: "No result found." });
  }
  return NextResponse.json(suggestionsJson);
}
