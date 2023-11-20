## What is Next.js?
It's a framework for React. 

## Main features in Next.js
No more need for react-router dom or third party libs to do some basic web app features. 

Next.js allows for SSR and SSG which is overall good for spped. 

Automatic code splitting. 

It is fast!

Add distinct api routes. 

Simplified data fetching with async await in server components and some cool data caching and revalidation apis. 



## Benefits of Next.js
- Nice to work with as a dev - allows you to quickly build complex web apps. 
- Works nicely with vercel (seeing as they built it)
- much shorter js bundles with server side rending. 
- Much better at SEO - web crawlers can see the complete .html pages instead of an mostly empty page. 


# Dynamic rendering: Server-Side Rendering (SSR)
In contrast to SPAs, server side rending deals with some of the issues by having the web server figure out what our inital HTML page looks like (on the server, not the client) and sending that back to the client. FCP is faster, and web crawler situation is improved. 

However, we still need to download the javascript for interactivity to happen. 

---

React server components. 

Because our server streams only the HTML for the sever components and only the JS for any required clients components, our initial javascript bundle is much smaller. 

So we can have both server components (rendered on the server, streamed to the client) and client components, (rendered on the browser)


# Static rendering: Static Site Generation (SSG)
SSG allows us to further speed up our apps by fetching any non dynamic data at build time - so our server isn't making requests over and over to some DB only to get the same data. If we know the data in our DB isn't going to change often, it's faster to generate the HTML on the server at build time. 


## SPA (single page applications)
The client makes a request for the web app - downloads everything for the app (a big javascript bundle) and then your browser figures everything out from there. This means it takes a while to get the 'First Contentful Paint' and that things like webcrawlers struggle to see the actual content of your site. Not good for SEO. 

