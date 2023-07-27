import { NextResponse } from "next/server"
import prisma from "@/utils/db"

export async function POST(req: Request) {
  const body = await req.json()
  const newTodo = await prisma.todo.create({
    data: {
      title: body.title,
    },
  })
  return NextResponse.json({ newTodo })
}
