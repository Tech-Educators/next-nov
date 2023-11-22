import { getFlowers, formatNameForURL} from "@/lib/getFlowers"

export default function Page({params} : {params: {flower: string}}) {

    const getFlowerData = (name:string) => {
        const flowers = getFlowers()
        return flowers.find(f => formatNameForURL(f.name) === name)
    }

    const flower = getFlowerData(params.flower)
    return flower ? (
        <div>
            <h1>{flower.name}</h1>
        </div>
    ) : (
        <div>That isn't a valid flower!</div>
    )
}
