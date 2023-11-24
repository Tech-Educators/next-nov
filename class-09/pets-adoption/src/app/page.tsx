import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg">Paws and Claws Adoption Emporium</h1>
      <br/>
      <Link href='/pets'>View Animals up for adoption</Link>
    </div>
  )
}
