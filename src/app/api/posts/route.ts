import { NextResponse } from "next/server"
import prisma from "@/utils/db"

export async function GET(req: Request) {
  const users = await prisma.user.findMany()
  return NextResponse.json({ users })
}

export async function POST(req: Request) {
  const res = await req.json()
  return NextResponse.json({ res })
}
