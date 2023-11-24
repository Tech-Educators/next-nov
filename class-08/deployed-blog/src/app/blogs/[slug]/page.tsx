import { getPosts, getPostsBySlug } from "@/lib/posts"
import { notFound } from "next/navigation"

type paramsType = {
    params : {
        slug: string
    }
}

export function generateStaticParams() {
    const posts = getPosts()
    return posts.map(post => ({slug: post.slug}))
    
}

export default function Page({params}: paramsType) {
    // const post = getPostsBySlug(params.slug)

    // if (!post) {
    //     notFound()
    // }
    return (
        <div>
            <h1>{params.slug}</h1>
            <h2>wtf</h2>
            {/* <p>{post.content}</p> */}
        </div>
    )
}