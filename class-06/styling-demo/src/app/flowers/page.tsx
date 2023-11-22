import GlassCard from '@/components/GlassCard'
import Link from 'next/link'
import { getFlowers, typeFlowers } from '@/lib/getFlowers'


export default function Page() {
    const flowers:typeFlowers[] = getFlowers()
    return (
        <div>
            <Link href='/'>{`${`<---`}`}</Link>
        <div className='p-4 flex flex-wrap'>
            {flowers.map(flower => {
                return (
                    <>
                      <GlassCard name={flower.name} color={flower.color} nativeRegion={flower.nativeRegion} bloomingSeason={flower.bloomingSeason} uniqueFact={flower.uniqueFact} />
                      </>
                )
            })}
        </div>
        </div>
    )
}