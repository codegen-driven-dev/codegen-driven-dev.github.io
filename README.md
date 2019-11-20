compilers.com.au
================
[![Build Status](https://travis-ci.org/codegen-driven-dev/www.svg?branch=master)](https://travis-ci.org/codegen-driven-dev/www)

Bunch of guides for Compiler Driven Development (CDD).

## Deploy distribution
First [`npm i -g angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages), then:

    ng build --prod
    cp README.md dist/compilers-www
    printf 'compilers.com.au\n' >> dist/compilers-www/CNAME
    ngh --dir='dist/compilers-www' --repo='https://github.com/codegen-driven-dev/codegen-driven-dev.github.io' --branch='master' --message="$(git log -1 --pretty='%B')"

## Install

Assumes you have latest Node.JS and npm on *nix machine, then just run:

    npm i -g @angular/cli typescript
    npm i

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
