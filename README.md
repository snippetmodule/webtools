[![Build Status](https://travis-ci.org/r-park/angular2-seed.svg?branch=master)](https://travis-ci.org/r-park/angular2-seed)


# Angular2 Seed
A minimal setup for small Angular2 apps.

- Angular `2.0.0-beta.0`
- BrowserSync
- ES6 Shim
- Gulp `4.0.0-alpha.2`
- Jasmine
- Karma
- Typescript `~1.7.5`
- SASS
- SystemJS


## Getting Started
### Prerequisites
- `node >=4.2`

### Installing Global Dependencies
```bash
$ npm install -g karma-cli
```

##### Gulp v4 (optional)
```bash
$ npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```bash
$ ./node_modules/.bin/gulp
```


### Installing Project-local Dependencies
```bash
$ npm install
```


## Commands
#### Build
```bash
$ gulp build
```
- Clean the `/target` directory
- Build the sources to `/target` directory

#### Develop
```bash
$ gulp
```
- Clean the `/target` directory
- Build the sources to `/target` directory
- Start the BrowserSync server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>
- Watch for changes to your source files
- Live-reload the browser

#### Lint (tslint)
```bash
$ gulp lint
```

#### Test (single-run)
```bash
$ gulp test
```

#### Test (watch mode)
```bash
$ gulp test.watch
```
