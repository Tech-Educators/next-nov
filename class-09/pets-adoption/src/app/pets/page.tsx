import { getPets, typePets } from '@/lib/petsLib'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata:Metadata = {
    title: 'Pets up for adoption | Paws and Claws Adoption Emporium',
    description: 'A list of pets up for adoption'
}

type petSearchQuery = {
    sortByAge: string
}


function comparePets(a: typePets , b: typePets) {
    if (a.age < b.age) {
        return -1;
    } else if (a.age > b.age) {
        return 1;
    } else {
        return 0
    }
}

// /aboout?sortByAge=sdfsdf

export default function Page({searchParams} : {searchParams: petSearchQuery}) {
    const pets = getPets()

    let sortedPets = [...pets]

    if (searchParams.sortByAge == 'asc') {
        sortedPets.sort(comparePets).reverse()
    } else if (searchParams.sortByAge == 'desc') {
        sortedPets.sort(comparePets)
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className='text-lg p-8'>Checkout the pets:</h1>
            <br/>
            <div className='flex flex-col items-center text-gray-400'>
                <Link href='/pets'>Remove the sort</Link>
                <br/>
                <Link href='/pets?sortByAge=asc'>Sort by ascending age</Link>
                <br/>
                <Link href='/pets?sortByAge=desc'>Sort by descending age</Link>
                <br/>
            </div>
            <br />
            {sortedPets.map((pet, index) => {
                return (
                    <div key={index}>
                        <Link href={`/pets/${pet.name}`}>{pet.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}