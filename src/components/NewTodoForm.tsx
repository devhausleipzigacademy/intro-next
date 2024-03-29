import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"

export async function createTodo(formData: FormData) {
  "use server"
  const title = formData.get("title") as string
  const newTodo = await prisma.todo.create({
    data: {
      title,
    },
  })
  console.log(newTodo)
  revalidatePath("/")
}

export function NewTodoForm() {
  // const [title, setTitle] = useState("")
  // const router = useRouter()

  // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   const newTodo = await fetch("http://localhost:3000/api/todos", {
  //     method: "POST",
  //     body: JSON.stringify({ title }),
  //   }).then((res) => res.json())
  //   console.log(newTodo)
  //   router.refresh()
  //   setTitle("")
  // }

  return (
    <form action={createTodo} className="flex gap-4 mt-4">
      <input
        name="title"
        type="text"
        className="flex-1 px-3 border border-slate-300 rounded"
      />
      <button className="bg-slate-500 text-slate-100 py-2 px-3 rounded">
        Add Todo
      </button>
    </form>
  )
}
