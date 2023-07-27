import { Post } from "@/components/Post"
import { PostType } from "@/types/post"

export default async function Blog() {
  const posts = (await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  )) as PostType[]

  return (
    <>
      <h2>Blog</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
