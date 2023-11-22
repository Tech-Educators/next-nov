import GlassCard from '@/components/GlassCard'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='p-8 flex'>
            <GlassCard/>
            <GlassCard/>
            <GlassCard/>
            <Link href='/'>Go back to home </Link>
        </div>
    )
}