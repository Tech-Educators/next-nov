# 11. Dynamic rendering: Make a pageview counter using Vercel KV

After deploying our app to Vercel as a walking skeleton we can use the Vercel KV database (it's powered by Redis and hosted by Neon) under the Storage tab to introduce some basic server side persistence to our app.

We can connect to this database locally as well, and it's especially easy if we use the Vercel CLI.


Head over to the Vercel Dashboard at Vercel.com and follow these steps on the Storage tab.

- Click "Create database"
- Choose "KV - Durable redis"

The back on the dashboard choose your project, and click on the Storage tab inside the project.

- Click "Connect Store"
- Select existing and choose your KV store
- Continue...

Once this is setup your database will be accessible to your app when it's deployed to Vercel, but it won't work locally because it doesn't know how to access the database.

## Environment variables

Next.js reads environment variables configured in a `.env` or `.env.local` file, among a few others.

Go to the dahsboard for your KV store and click `.env.local` on the quick code snippet, and copy that snippet into a new `.env.local` file in the root of your project.

**Be careful to make sure this is not commited to git! Include the name of the .env file in your .gitignore file.**

## Testing the view counter

We can test the view counter by deploying the app or running it locally. The counter should increment in both locations with every page refresh.

## Fetching data from a third-party API

It's worth reading all about fetching in the Next.js docs because there's quite a lot to it that we won't repeat here. It's a great and up to date overview of the options and use cases.

To begin, fetching the number of stars for a Github repo from the the Github API is as easy as calling `fetch` from your server components and rendering out the data:

```ts
const res = await fetch("https://api.github.com/repos/vercel/next.js");
```

The only requirement to make this asynchronous call work is to ensure your page component is an async function. The following will load the stars for Next.js and print the response to your terminal (not the browser console, because it runs on the server!)

```tsx
export default async function Page() {
  // call the API and receive an HTTP Reponse
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  console.log("res", res);
  // get the JSON body from the Resonse
  const data = await res.json();
  console.log("data", data);

  return <div>Repo has {data.stargazers_count} stars.</div>;
}
```

The fetch docs detail a number of arguments you can pass to this fetch call to affect the way Next renders your page.

The most important to be aware of at this stage is the `revalidate` option.

```ts
const res = await fetch("https://api.github.com/repos/vercel/next.js", {
  next: {
    revalidate: 60,
  },
});
```

Revalidate will cache the response from the Github API.

The first time you call this page, it will call Github, and delay the loading of the page. When you refresh the page to load it a second time it will load more quickly. The response from Github will be cached for 60 seconds, so you'll get fast responses.

Once the revalidate time has elapsed, the API will be called again and the data will update.

Experiment with different times to see this in effect.

You can also apply revalidation values at the page level by exporting a revalidate value from a `page.tsx` file:

```ts
// app/any/page.tsx
export const revalidate = 60`;
```

It's worth reading the Next.js docs on this in detail as it can have some significant effects on the performance and resource usage of your app. An API call for data that only changes rarely can be cached for a long time before revalidation, especially if the API is slow or expensive. Whereas data that changes quickly and can be retrieved cheaply benefits from lower revalidation times, to ensure the up to date information is requested regularly.

It's well known that caching is one of the two hardest problems in computer science, along with naming things and off-by-one errors. It's worth spending some time understanding how Next.js handles it.