//


export default async function StarGazers() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const data = await res.json()

    console.log(res)

    return (
        <div>
            <p>{data.stargazers_count} people gazing at Next.js</p>
        </div>
    )

}