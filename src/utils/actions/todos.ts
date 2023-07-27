"use server"

import prisma from "../db"
import { revalidatePath } from "next/cache"

export async function createTodo(formData) {
  const newTodo = await prisma.todo.create({
    data: {
      title: formData.get("title"),
    },
  })
  console.log(newTodo)
  revalidatePath("/")
}
