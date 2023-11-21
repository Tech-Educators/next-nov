import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>This is the home page. The root route!</h1>
      <Link href='/animals'>Go to my animals page</Link>
    </div>
  )
}
