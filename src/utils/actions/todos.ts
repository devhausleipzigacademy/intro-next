"use server"

import prisma from "../db"
import { revalidatePath } from "next/cache"

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string
  const newTodo = await prisma.todo.create({
    data: {
      title,
    },
  })
  console.log(newTodo)
  revalidatePath("/")
}
