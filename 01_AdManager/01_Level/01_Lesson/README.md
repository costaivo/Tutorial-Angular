# Lesson 01 -- Running an AngularJs 2 Application

## Lesson Contents

1. Development Environment Setup
1. Selecting an Language
1. Selecting Editor for development
1. Running AngularJs 2 Application
1. Angular-CLI tooling

### 1. Development Environment Setup

    Install NodeJS on the development machine.

### 2. Selecting an Language

- **TypeScript**
- Dart
- JavaScript
  - ES5
  - ES6/ES2015

### 3. Selecting Editor for development

- **VS-Code**
- Brackets
- Sublime
- CodePen

### 4. Running AngularJs 2 Application

Open a command prompt in the project's root directory  (AngularJs2-AdManager\01_Quickstart)

- Type: `npm install`
 This installs the dependencies as defined in the package.json file.

- Type: `npm start`

### 5. Introduction to Angular-cli

Creating the initall setup for an Angular JS application is very time consuming and deters many first timers from learning Angular. Angular-CLI provides the bootstrap code for starting with Angular JS developement. All the initial plumbing work is already taken care of by Angular-CLI

- Install angular-cli using the command

  `npm install -g @angular/cli@latest`

- Creating a new project using angular-cli

``` dos
    ng new ad-manager-app
    cd hello-World
    ng serve
```

- Running the application using angular-cli.

Navigate to the application folder then execute the below command

  `ng serve`

This launches the TypeScript compiler (tsc) to compile the application and wait for changes.
It also starts the lite-server and launches the browser to run the application.

- Generate new component using angular-cli

  `ng generate component dashboard`

- Generate new service using angular-cli

  `ng generate component dashboard.service`

### 6. Adding Bootstrap to Angular Project

To add bootstrap to the angular project use npm to add the bootstrap package

  `npm install bootstrap --save`

### 7. 
[:arrow_left: Previous](<https://github.com/costaivo/AdManagerUI-AngularJs/tree/master>)&nbsp;&nbsp;
[:1234: Index](<https://github.com/costaivo/AdManagerUI-AngularJs/tree/master>)&nbsp;&nbsp;
[:arrow_right: Next](<https://github.com/costaivo/AdManagerUI-AngularJs/tree/master/01_AdManager/01_Level/02_Lesson>)