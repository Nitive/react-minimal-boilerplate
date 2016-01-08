React Minimal Boilerplate
---

This project is minimal environment for React projects
It is for people who know nothing about React ecosystem and do not want to use webpack, hot module replacement, server rendering and other great features.

## Do I need to use it in my React project?
No. This is stuff for beginners to start learning React without big knowledges in tooling and React ecosystem.
It does not have some important optimisation for production.

## What inside?
- [Browserify](http://browserify.org)
- [Babel](https://babeljs.io/)
- [Stylus](http://stylus-lang.com) (with [autoprefixer](https://github.com/postcss/autoprefixer))
- [Browsersync](https://browsersync.io)

## Structure
- `app`
	- `components`
		- `ComponentName.jsx`
		- ...
	- `styles`
		- `ComponentName.styl`
		- ...
	- `app.js`
	- `app.styl`
- `index.html`
- `build // compiled files here`

## Usage

`npm start` - start local server, watch and compile files, autoreload page  

`npm run build` - build into `build/` folder with minification


## Troubleshooting
#### I don't want use Stylus
Just add .css extension in glob pattern inside `app/app.styl` (`@import 'styles/*.css'`) and put .css files in `app/styles` instead of .styl
