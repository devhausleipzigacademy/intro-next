import { NewTodoForm } from "@/components/NewTodoForm"
import prisma from "@/utils/db"

export default async function Home() {
  const todos = await prisma.todo.findMany()

  return (
    <div className="p-4">
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <li
            className="border border-slate-300 flex justify-between py-2 px-3"
            key={todo.id}
          >
            <span>{todo.title}</span>
            <span>{todo.completed ? "✅" : "❌"}</span>
          </li>
        ))}
      </ul>
      <NewTodoForm />
    </div>
  )
}
