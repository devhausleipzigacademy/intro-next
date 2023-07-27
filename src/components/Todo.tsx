import { Todo as TodoType } from "@prisma/client"
import { revalidatePath } from "next/cache"
import prisma from "@/utils/db"

type Props = {
  todo: TodoType
}

async function deleteTodo(formData: FormData) {
  "use server"
  const id = formData.get("id") as string
  await prisma.todo.delete({
    where: {
      id,
    },
  })
  revalidatePath("/")
}

export function Todo({ todo }: Props) {
  return (
    <li className="border border-slate-300 flex justify-between py-2 px-3">
      <div className="flex gap-2">
        <form action={deleteTodo}>
          <input type="hidden" name="id" value={todo.id} />
          <button>🗑️</button>
        </form>
        <span>{todo.title}</span>
      </div>
      <span>{todo.completed ? "✅" : "❌"}</span>
    </li>
  )
}
