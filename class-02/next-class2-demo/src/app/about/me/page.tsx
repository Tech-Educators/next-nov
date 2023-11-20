import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <p>This is about me. I am very interesting.</p>
            <Link href='/about'>Go back to general about</Link>
        </div>
    )
}