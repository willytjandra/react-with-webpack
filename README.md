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

## Step 3 - Webpack Dev Server

Although we can serve our basic React app using `npx serve dist`, it is not a great developer experience to terminate the process and re-run it everytime changes are made. What we need is an ability to watch for file changes and reload it.

Let's add [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) to improve our development experience.

```sh
npm i -D webpack-dev-server
```

## Step 4 - Babel

Before we add React, we need to install Babel. Babel is a compiler to transpile code into compatible javascript syntax in current/older browsers. We will use Babel to compile React `JSX`.

```sh
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```

## Step 5 - React

We're finally here. It's time to add React.

```sh
npm i react react-dom
```

That's it!!! Now we have scaffolded basic React application using Webpack.

## Step 6 - Typescript

So far our React app is written in Javascript. It's time to add Typescript support.

```sh
npm i -D typescript @types/react @types/react-dom @babel/preset-typescript
```

You should add [`tsconfig.json`](./tsconfig.json) to configure typescript in the project.

## Step 7 - ESLint and Prettier

To improve development experiance further, let's add ESLint and Prettier into our project.

ESLint is responsible for linting our code to find problems and show any errors and warnings. Whereas, Prettier will help in formatting our code.

```sh
npm i -D prettier eslint
```

To configure prettier, see [`.prettierrc`](./.prettierrc)
To configure ESLint, see [`.eslintrc.json`](./.eslintrc.json)
