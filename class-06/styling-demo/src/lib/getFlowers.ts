import FLOWERS from '@/stores/Flowers.json'
// JSON is automatically parsed when importing. 

export type typeFlowers = {
    name: string,
    color: string,
    nativeRegion: string,
    bloomingSeason: string,
    uniqueFact: string
}


// the typing here is used to say that we expect the function getFlowers to return an array of objects with the type of typeFlowers
export function getFlowers():typeFlowers[] {
    // later, we can make an api or db call here instead of just importing and returing json. 

    return FLOWERS
}

export function formatNameForURL(name:string) {
    return name.toLowerCase().replace(/\s+/g, '-');
}