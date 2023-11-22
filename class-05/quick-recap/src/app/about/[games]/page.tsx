import Link from 'next/link'

type gamesParam = {
    params: {
        games: string
    }
}

export function generateMetadata({params}: gamesParam) {
    return {
        title: `${params.games}`,
        description: `${params.games} description`
    }
}

export default function Page({params}: {params: {games: string}}) {
    return (
        <div>
            <h2>This is a dynamic route</h2>
            <p>{params.games}</p>
            <Link href='/about' className='p-8'>Go back</Link>
            {/* dont use a tags */}
            <a href='/'>Go all the way back.</a>
        </div>
    )
}

// react 

{
    params: {
        games: 'whateverwetypeintotheURL'; 
    }
}