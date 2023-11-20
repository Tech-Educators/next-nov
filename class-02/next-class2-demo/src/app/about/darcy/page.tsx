import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <p>My dogs name is darcy</p>
            <Link href='/about'>Go back to about</Link>
        </div>
    )
}