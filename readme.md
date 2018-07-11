# Front-end ABC

The Front-end ABC is a universal [Vue.js](https://vuejs.org/) app made with [Nuxt.js](https://nuxtjs.org/).

## Development

### Getting started

* Clone the repository.
* Copy `.env.example` to `.env`. You can find the `DATO_API_TOKEN` in the [CMS settings > API Tokens](https://front-end-abc.admin.datocms.com/admin/access_tokens/11195/edit). The CMS can be accessed using the `shared@voorhoede.nl` account (details in LastPass).
* Run app in development mode (`npm run dev`), see [scripts](#scripts).

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

This project requires [Node.js](http://nodejs.org/) (>= v8) and [npm](https://npmjs.org/) (comes with Node).

After installing dependencies using `npm install` the following scripts are available:

`npm run ...` | Description
---|---
`build` | Builds app for production to `dist/`.
`dev` | Serves app on [`http://localhost:3000`](http://localhost:3000) with hot reloading.
`proxy` | Exposes app on localhost to world wide web for testing on other devices.