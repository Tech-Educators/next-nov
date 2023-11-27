import StarGazers from "./StarGazers"

export default function Home() {
  return (
    <div>
      <h1>Welcome to my site</h1>
      {/* @ts-ignore-error Server Component */}
      <StarGazers/>
    </div>
  )
}
