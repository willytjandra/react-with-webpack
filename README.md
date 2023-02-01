# React with Webpack

Getting started with React without using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). Here's step by step that I took to scaffold basic React application using Webpack.

## Prerequisite

- [NodeJS](https://nodejs.org/en/download/)
- Your favourite IDE - [VSCode](https://code.visualstudio.com/download)

## Step 1 - Basic Scaffolding

First step is to initialize new project using `npm`.

```sh
mkdir react-with-webpack
cd react-with-webpack
npm init -y
```

Once the project is initized, you can open the folder in VSCode.

Next, create basic `index.html` boilerplate:

```sh
mkdir public
touch public/index.html
```

## Step 2 - Webpack

Now, we will add webpack into our project:

```sh
npm i -D webpack webpack-cli html-webpack-plugin
```

- `webpack` and `webpack-cli` are required to enable webpack support in our project.
- `html-webpack-plugin` is required to inject bundled javascript (built by webpack) into `index.html`.

Let's configure webpack, see [`webpack.config.js`](./webpack.config.js).

At this stage, we have a working webpack to bundle our plain javascript and inject it to `index.html`. You can test this by running `npx serve dist`
