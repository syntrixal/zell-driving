// app/api/google-reviews/route.ts
import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { reviews: [], error: "Missing API config" },
      { status: 200 },
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=en`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { reviews: [], error: data.status },
        { status: 200 },
      );
    }

    const reviews = (data.result.reviews ?? []).map((r: any) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.relative_time_description,
      profilePhoto: r.profile_photo_url,
      authorUrl: r.author_url,
    }));

    return NextResponse.json({
      reviews,
      rating: data.result.rating,
      totalRatings: data.result.user_ratings_total,
    });
  } catch (err) {
    return NextResponse.json(
      { reviews: [], error: "Fetch failed" },
      { status: 200 },
    );
  }
}
