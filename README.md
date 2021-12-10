# nuxt universal crud app

> Set your own supabase api keys from plugins/client.js

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Deploy to Heroku
```bash
heroku create
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set HOST=0.0.0.0
heroku config:set NODE_ENV=production
git init
git add .
git commit -a -m "first deployment"
git push heroku master
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
