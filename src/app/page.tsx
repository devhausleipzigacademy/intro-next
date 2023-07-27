import { NewTodoForm } from "@/components/NewTodoForm"
import { Todo } from "@/components/Todo"
import prisma from "@/utils/db"

export default async function Home() {
  const todos = await prisma.todo.findMany()

  return (
    <div className="p-4">
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <NewTodoForm />
    </div>
  )
}
