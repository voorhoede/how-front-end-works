# Pick Up 10

**Pick Up 10 is a campaign by the [Plastic Soup Surfer](https://www.plasticsoupsurfer.org/), which challenges users to pick up plastic litter and capture it with their mobile device. Users get points for their picture based on what's in it. They can then share their picture & score to challenge their friends.**

The Pick Up 10 is a universal [Vue.js](https://vuejs.org/) app made with [Nuxt.js](https://nuxtjs.org/). The app is backed by [Cloudinary](https://cloudinary.com/), a Mongo DB on [mLab](https://mlab.com/) and the [Google Vision API](https://cloud.google.com/vision/). The app is deployed on [Netlify](https://www.netlify.com/).


## Development

### Getting started

* Clone the repository.
* Copy `.env.example` to `.env`. You can find the `DATO_API_TOKEN` in the [CMS settings > API Tokens](https://pick-up-10.admin.datocms.com/admin/access_tokens/9209/edit). The CMS can be accessed using the `shared@voorhoede.nl` account (details in LastPass). Other environment variables are also in a LastPass note (Shared Voorhoede All > Hosting > pick-up-10).
* Run app in development mode (`npm run dev`), see [scripts](#scripts).
* Changes on master and content publishing from the CMS trigger a new build and deploy to the [live environment](https://pick-up-10.netlify.com/).

### Structure

```
src/
  assets/         <- core files, not public
  components/     <- Vue components
  layouts/        <- base layout for pages
  middleware/     <- ...
  pages/          <- view per route
  static/         <- public assets

.env              <- local environment variables
dato.config.js    <- data dump configuration
netlify.toml      <- Netlify build & function config
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