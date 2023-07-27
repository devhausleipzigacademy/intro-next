import { PostType, User } from "@/types/post"

type Props = {
  params: {
    postId: string
  }
}

export default async function SinglePost({ params }: Props) {
  const post = (await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  ).then((res) => res.json())) as PostType

  const author = (await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  ).then((res) => res.json())) as User

  return (
    <div>
      <h3 className="font-bold text-xl">{post.title}</h3>
      <span>Author: {author.name}</span>
      <p>{post.body}</p>
    </div>
  )
}
