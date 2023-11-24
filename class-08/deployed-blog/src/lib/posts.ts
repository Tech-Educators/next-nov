type postsType = {
    slug: string,
    title: string,
    content: string,
    id: number
}

const POSTS: postsType[] = [
    {
        slug: 'first-post',
        title: 'blog 01',
        content: 'this is the first blog post',
        id: 0
    },    {
        slug: 'second-post',
        title: 'blog 02',
        content: 'this is the second blog post',
        id: 0
    },    {
        slug: 'third-post',
        title: 'blog 03',
        content: 'this is the third blog post',
        id: 0
    },
]

export function getPosts() {
    return POSTS
}

export function getPostsBySlug(slug: string) {
    return POSTS.find(post => post.slug == slug)
}