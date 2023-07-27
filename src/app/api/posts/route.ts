import { NextResponse } from "next/server"

export async function GET(req: Request) {
  console.log(req)
  return NextResponse.json({ message: "Hello" })
}

export async function POST(req: Request) {
  const res = await req.json()
  return NextResponse.json({ res })
}
