# fastify_8svelte

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2024/02/10 

 update  : 2024/02/12

***
### Summary

fastify + Svelte + vite, MPA sample

***
### build

* svelte-build
```
npx vite build --mode client

#watch
npx vite build --mode client --watch
```
***
* fastify-build

```
node build.js && npx vite build --mode client
```
* dev-start
```
yarn dev
```

***
### tailwindcss

```
npx tailwindcss -i ./src/main.css -o ./public/static/main.css

#watch-mode
npx tailwindcss -i ./src/main.css -o ./public/static/main.css --watch
```

***
### blog 

https://zenn.dev/knaka0209/scraps/fe7d58968b1569

***

