import Link from 'next/link'
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Animals Blog',
    description: 'A list of animals on my animals route.'
}



type petsSearchQuery = {
    sortBy: string
}

// FunkyNextObject = {
//     searchParms: {
//         sortBy: 'Whatever we do with ?sortBy=something'
//     }
// }

type petsType = {
    name: string,
    id: number
}

let pets: petsType[] = [{
        name: 'Darcy',
        id: 0
    },{
        name: 'Buddy',
        id: 1
    },{
        name: 'Zelda',
        id: 2
    },{
        name: 'Tess',
        id: 3
    },{
        name: 'Nanuk',
        id: 4
    },{
        name: 'Rover',
        id: 5
    }
]

// this compares each object in our pets array. If object a.name is < object b.name, it will swap them in the array. 
// but don't worry about this too much: to quote Tod, it just works. 
function comparePets(a: petsType, b: petsType) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0
    }
}

// next js 'exposes' the search Params to us (search params being the ?query=something in URLS). We're destructing that and then typing it. 
export default function Page({searchParams} : {searchParams: petsSearchQuery}) {

    // making a copy of the pets array so we don't mutate it. (if we just use the pets, it makes it impossible to 'undo' any sorting, even when there are no serach params)
    let sortedPets = [...pets]

    if (searchParams.sortBy == 'asc') {
        sortedPets.sort(comparePets)
    } else if (searchParams.sortBy == 'desc') {
        sortedPets.sort(comparePets).reverse()
    }

    return (
        <div>
            <h4>This is a website about animals: here are many animals!</h4>
            <p>{searchParams.sortBy}</p>
            <br />
            <Link href='/animals'>Remove the sort</Link>
            <br />
            <Link href='/animals?sortBy=asc'>Sort by ascending</Link>
            <br />
            <Link href='/animals?sortBy=desc'>Sort by descending</Link>
            <br />
            <br />
            <br />
            {sortedPets.map(pet => {
                return (
                    <div key={pet.id}>
                        <Link href={`/animals/${pet.name.toLowerCase()}`}>{pet.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}