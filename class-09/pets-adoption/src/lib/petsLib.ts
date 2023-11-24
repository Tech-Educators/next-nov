import PETS from './pets.json'

// JSON is automatically parsed

export type typePets = {
    name: string,
    species: string,
    breed: string,
    age: number,
    color: string,
    slug: string,
    fun_fact: string,
    image?: string
}

// image is an optinal property on the pets objects

export function getPets():typePets[] {
    return PETS
}

// write a function that accepts a slug as an argument 
// checks if the slug that it got as an argument matches one of the slugs in the PETS array. 

export function findPetBySlug(slug: string) {
    return PETS.find(pet => pet.slug === slug)
}