import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "url parameter required" }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
      signal: AbortSignal.timeout(5000),
    });

    const html = await res.text();

    // Extract og:image
    const ogMatch =
      html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i) ??
      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);

    const imageUrl = ogMatch?.[1] ?? null;

    return NextResponse.json({ imageUrl }, {
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch {
    return NextResponse.json({ imageUrl: null }, { status: 200 });
  }
}
