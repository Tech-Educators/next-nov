import { getFlowers, formatNameForURL} from "@/lib/getFlowers"
import Image from "next/image"

export function generateStaticParams() {
    const flowers = getFlowers()
    return flowers.map(flower => ({flower : flower.name}))
}

// export function generateStaticParams () {
//     return [{flower: "123"}]
// }

// export default function Page({params}: {params: {flower: any}}) {
//     return <p> {params.flower} </p>
// }


export default function Page({params} : {params: {flower: string}}) {

    const getFlowerData = (name:string) => {
        const flowers = getFlowers()
        return flowers.find(f => formatNameForURL(f.name) === name)
    }

    const flower = getFlowerData(params.flower)
    return flower ? (
        <div>
            <h1>{flower.name}</h1>
            {flower.image &&
                <Image src={flower.image} alt='flower' height={480} width={640}/>
            }
            <p>{flower.color}</p>
            <div>
                <p>{flower.nativeRegion}</p>
                <p>{flower.bloomingSeason}</p>
            </div>
            <p>{flower.uniqueFact}</p>
        </div>
    ) : (
        <div>That isn&apos;t a valid flower!</div>
    )
}
