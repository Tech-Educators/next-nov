import { getFlowers, formatNameForURL} from "@/lib/getFlowers"
import Image from "next/image"

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
                <Image src={flower.image} alt='flower'/>
            }
            <p>{flower.color}</p>
            <div>
                <p>{flower.nativeRegion}</p>
                <p>{flower.bloomingSeason}</p>
            </div>
            <p>{flower.uniqueFact}</p>
        </div>
    ) : (
        <div>That isn't a valid flower!</div>
    )
}
