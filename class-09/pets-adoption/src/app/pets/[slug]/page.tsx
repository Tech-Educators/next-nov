import { getPets, findPetBySlug } from '@/lib/petsLib'
import { notFound } from 'next/navigation'
import PetCard from '@/components/PetCard'
import Image from 'next/image'

type paramsType = {
    params: {
        slug: string
    }
}
// return an array of the routes we want next to pre-render
export function generateStaticParams() {
    const pets = getPets()
    return pets.map((pet) => {
        return {slug: pet.slug}
    })
}

export default function Page({params} : paramsType) {
    const pet = findPetBySlug(params.slug)

    if(!pet) {
        notFound()
    }

    return (
        <PetCard petProp={pet}/>
    )
    
}

// let WeirdEsotericNextObject = {
//     params : {
//         slug: 'puff'
//     }
// }

// function CardPage({name}) {
//     return <h1>{name}</h1>
// }

// <CardPage name='sam'/>