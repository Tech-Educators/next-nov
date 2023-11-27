import {sql} from '@vercel/postgres'

export default async function Home() {

  // automitic caching - (saves the result into memory (on the server ))
  // our browsers also do this. 

  // revalidation. 



  let time = await fetch('http://worldtimeapi.org/api/timezone/Europe/London', { next: {revalidate: 10}})

  const data = await time.json()
  const datetime = new Date(data.datetime)
  const evenEasierToReadDate = datetime.toLocaleTimeString('en-GB')

  console.log(data)


  // await sql`INSERT INTO ViewsTable (views) SELECT 0 WHERE NOT EXISTS (SELECT * FROM ViewsTable)`
  // await sql`UPDATE ViewsTable SET views = views + 1`
  // const result = await sql`SELECT views from ViewsTable`

  await sql`INSERT INTO views (Views) SELECT 0 WHERE NOT EXISTS (SELECT * FROM views)`;
  await sql`UPDATE views SET Views = Views + 1`;
  const result = await sql`SELECT Views FROM views`;

  // inesrt row if table is empty
  // inc views
  // get views

  // console.log(result)

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <p>You&apos;re looking at my root route. Rude!</p>
      <p>This has been viewed {result.rows[0].views} times</p>
      <img src='https://64.media.tumblr.com/632f8d471cdef6eb0a5018d125ce6475/tumblr_mv4rb608vh1s5jjtzo1_400.gif' alt='galaxy'></img>
      <p>The time is : {evenEasierToReadDate}</p>

    </main>
  )
}
