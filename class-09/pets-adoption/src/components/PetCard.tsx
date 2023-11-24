import Image from "next/image"
export default function PetCard({petProp}) {
    return (
        <div>
            {petProp.image && (
            <Image
                src={`${petProp.image}`}
                alt="petProp.name"
                height="550"
                width="400"
            />
        )}
            <h1>{petProp.name}</h1>
            <h3>{petProp.breed} | {petProp.species} | {petProp.color}</h3>
            <p>{petProp.fun_fact}</p>
        </div>
    )
}