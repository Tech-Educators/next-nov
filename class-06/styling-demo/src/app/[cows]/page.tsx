export default function Page({params}: {params: {cows:string}}) {
  return (
    <h1>{params.cows}</h1>
  )
}