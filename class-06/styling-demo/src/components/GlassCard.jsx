import styles from './GlassCard.module.css'
import Link from 'next/link'
import { formatNameForURL } from '@/lib/getFlowers'
import { quicksand } from '@/app/layout'

export default function GlassCard({name, color, nativeRegion, bloomingSeason, uniqueFact}) {
    return (
        <div className={`${styles.glasscard} ${styles.glasseffect}`}>
            <Link href={`/flowers/${formatNameForURL(name)}`}><h2 className='text-blue-500'>{name}</h2></Link>
            <p><strong>Colour:</strong>{color}</p>
            <p><strong>Native Region:</strong>{nativeRegion}</p>
            <p><strong>Blooming Season:</strong>{bloomingSeason}</p>
            <p><strong>Unqiue Fact:</strong>{uniqueFact}</p>
        </div>
    )
}