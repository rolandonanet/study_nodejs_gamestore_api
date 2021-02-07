# NodeJS GameStore APi

## Commands History

Creating package.json by adding npm to project, npm is a package manager for JavaScript.

```shell
$ npm init
```

> You may see -D on some commands below, this keep the package only on development environment, once it may has no usage on production.

## Code standards

This block will cover code standards and code protection on git commit process. This block will install a linter, a stage lookup and a git script hook to manage this.

Installing package standard. This will check the style of all .js files in the current working directory and help you to keep your code nice and clean.

```shell
$ npm i standard -D
```

Installing package lint-staged. When we work with git if you run `git status` we have an area with only new or updated files, this package allows you to run scripts only on files on this area, i.e. you may check all new and modified .js files with standardJS before every commit, just to make sure that all the code are nice and clean to push.

```shell
$ npm i lint-staged -D
```

Installing package husky. It allow us to add hooks on git, so I can run a custom script before git actions, i.e. we can configure to run lint-staged, before every commit.

```shell
$ npm i husky -D
```

# Testing

Installing package jest. This is the Javascript Testing Framework that we'll use on this application.

```shell
$ npm i jest -D
$ npx jest --init
```
