import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-600 font-mono">
      <h2>Hello, this is my website!</h2>
      <img src='https://avatars.githubusercontent.com/u/119852516?v=4'/>
    </main>
  )
}
