import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <h2>This is the about page</h2>
            <Link href='/about/me'>Learn greats things about me </Link>
            <br />
            <a href='./about/darcy'>Learn about darcy</a>
        </div>
    )
}