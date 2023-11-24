import { getPosts } from "@/lib/posts"
import Link from "next/link"

export default function Page() {
    const posts = getPosts()

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>This is the blogs page! Cool! </h1>
        {posts.map(post => {
          return (
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
          )
        })}
      </main>
    )
  }