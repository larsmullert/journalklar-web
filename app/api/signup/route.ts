import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const appUrl = process.env.APP_API_BASE_URL ?? "https://app.journalklar.dk";
  const secret = process.env.SIGNUP_API_SECRET;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "MISSING_FIELDS" }, { status: 400 });
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (secret) {
    headers["Authorization"] = `Bearer ${secret}`;
  }

  // Forward the real client IP so the app can log it in the DPA audit trail
  const clientIp =
    req.headers.get("x-forwarded-for") ??
    req.headers.get("x-real-ip") ??
    "unknown";
  headers["x-forwarded-for"] = clientIp;

  try {
    const res = await fetch(`${appUrl}/api/signup`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "ERR_SIGNUP" }, { status: 500 });
  }
}
