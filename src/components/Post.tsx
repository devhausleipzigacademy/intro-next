import { PostType } from "@/types/post"
import Link from "next/link"

type Props = {
  post: PostType
}

export function Post({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="shadow-md border border-slate-500"
    >
      <p>{post.title}</p>
    </Link>
  )
}
