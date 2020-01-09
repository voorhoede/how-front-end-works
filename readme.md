# How Front-End Works

How Front-End Works is a universal [Vue.js](https://vuejs.org/) app made with [Nuxt.js](https://nuxtjs.org/). The app is deployed on [Netlify](https://www.netlify.com/).

## Development

### Getting started

* Clone the repository.
* Copy `.env.example` to `.env`. You can find the `DATO_API_TOKEN` in the [CMS settings > API Tokens](https://how-front-end-works.admin.datocms.com/admin/access_tokens/11195/edit). The CMS can be accessed using the `shared@voorhoede.nl` account (details in LastPass).
* Run app in development mode (`npm run dev`), see [scripts](#scripts).
* Changes on master and content publishing from the CMS trigger a new build and deploy to the [live environment](https://how-front-end-works.netlify.com).

### Structure

```
src/
  assets/         <- core files, not public
  components/     <- Vue components
  layouts/        <- base layout for pages
  middleware/     <- middleware for routing
  pages/          <- view per route
  static/         <- public assets

.env              <- local environment variables
dato.config.js    <- data dump configuration
nuxt.config.js    <- Nuxt app config
```

### Scripts

This project requires [Node.js](http://nodejs.org/) (>= v10) and [npm](https://npmjs.org/) (comes with Node).

After installing dependencies using `npm install` the following scripts are available:

`npm run ...` | Description
---|---
`build` | Builds app for production to `dist/`.
`dev` | Serves app on [`http://localhost:3000`](http://localhost:3000) with hot reloading.
`proxy` | Exposes app on localhost to world wide web for testing on other devices.