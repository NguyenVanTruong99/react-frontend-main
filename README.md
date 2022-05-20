# Noxx

This project builds a React client that consumes a GraphQL API for front-end user access.

For information on Git Workflow see [Git Guide](./GITGUIDE.md).

## Environments

```
+-------------+----------------------------------------+------------+------------+
| Environment |               URL                      | Git Branch | Database   |
+-------------+----------------------------------------+------------+------------+
| Staging     | https://staging--noxx-app.netlify.app/ | staging    | staging    |
| Production  | https://beta.getnoxx.com               | production | production |
+-------------+----------------------------------------+------------+------------+
```

See \_branchdeploy_headers for site access login and password

## Prerequisites

In order to work on this project, you'll need, at least, a basic understanding of these technologies:

- JavaScript
- Node
- Git
- [GraphQL](https://graphql.org/)
- [React](https://reactjs.org/)

We also strongly recommend you use [Visual Studio Code](https://code.visualstudio.com/) as your IDE.

## Access

You'll need access to the following products

- Netlify (Static Site Server)
- Google Drive (draw.io model definitions and relations)
- Noxx GitHub organization (Code and Project Management)
- [React Github](https://github.com/NoXX-Technologies/react-frontend) (via SSH)
- Slack (Team communications)
- Miro (Model definitions and relations)
- Notion (Project/Issue Management)
- Figma (Design mocks)

## Setup

The following setup guide is for a Mac machine unless otherwise specified.

You'll need to have access to the git repo on GitHub using a GitHub account with at least one SSH key added to it

### Homebrew

`$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

Make sure to follow prompts after install

### GitHub

`$ brew install gh`
`$ gh auth login`

### Node

- install [nvm](https://github.com/nvm-sh/nvm)

`$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`

Make sure to check prompts after install finishes

- install node

`$ nvm install node`

### Yarn

`$ npm install --global yarn`

### Git/Yarn

`$ git clone git@github.com:NoXX-Technologies/react-frontend.git`
`$ cd react-frontend`
`$ git checkout -b <your name>`
`$ yarn`

### Misc

1. Rename .env.development.local.example to .env.development.local and configure as needed

## Running the app

[Start the rails app](https://github.com/NoXX-Technologies/rails)

Start the app:

`$ yarn dev`

This will start the app and run cypress e2e tests

## Development Workflow

At the beginning of each iteration, each developer should:

- Create a new branch for that iteration using the following convention: `$ git checkout -b <developer name>/<github-milestone-name>`
- [Import Data](#importing-data)
- [Index Elasticsearch](#reindexing-elasticsearch)

After that, developers should work on the tickets assigned to them for that iteration.

Upon completiton, the commit message should follow this convention:

`$ git add .; git commit -am “closes #<issue-number>”`

At the end of the development phase of the iteration, open a pull request to the main branch with your iteration branch:

`$ gh pr create`

This will push your iteration branch to GitHub and run tests and linters against your code. If either of these fails, fix immediately and re-push your iteration branch for review.

During the fixes phase of the iteration, follow the same process but make your changes directly to the staging branch, using this same convention:

`$ git add .; git commit -am “closes #<issue-number>”`

When you are finished with your fixes, deploy to staging with a patch version bump (one bump for all fixes)

## Deploying

`$ git checkout <env>`
`$ git pull`
`$ scripts/deploy`

The last step will prompt for a type of version bump.

Whoever is in charge of code reviews will bump the minor version number once per iteration following the code review.

During the fixes phase, each developer will be responsible for deploying to staging and will use a patch version bump for each deploy.

### Feature Flags

To avoid a situation where a feature is half completed, but the code still need to be deployed, consider using feature flags.

To use a feature flag, add it to utils/featureFlags.js. Right now, featureOn is just an example and illustrates two types of flags - gatting to admins only and gatting from appearing on production.

To utilize the flag, put the desired code behind a conditional check and import the correct feature flag.

### Directory Structure

```
| - package.json defines dependencies
| - src
| -- components: holds all the React components for the app. Components may be nested but should adhere to the following structure
| --- Styles.js holds global styles for the app
| --- Sample
| ---- SampleView.js -> Pure functional components.
| ---- SampleContainer.js -> Non-functional component used to define functions, fetch data and more that are passed to the View
| ---- SampleStyles.js -> Used for the component styles
| ---- SampleTest.js -> Test file used to test the View with Jest
| ---- queries.js -> GraphQL queries for a model component
| ---- mutations.js -> GraphQL mutations for a model component
| ---- fragments.js -> GraphQL fragments for a model component
| ----- Sub
| ------ SampleSubView.js
| ------ SampleSubContainer.js
| ------ SampleSubStyles.js
| ------ SampleSubTest.js
| -- config (non react files that hold non-sensitive environment-independent environment variables)
| -- contexts: used for React Contexts
| -- hooks: used for React Hooks
| -- pages: components tied directly to routes
| -- test: holds helper functions for testing
| -- util: holds non-react functions that are used throughout the app
```

### Style Guide

1. See /design in your web browser for design pattern library
1. [Overriding theme properties for individual MUI Components](https://mui.com/system/the-sx-prop/)
1. [Overriding theme properties for global MUI Components](https://mui.com/customization/theme-components/#global-style-overrides) and [here](https://mui.com/customization/default-theme/)
1. [Styling non MUI Components](https://mui.com/guides/interoperability/#emotion) - Use this as little as possible. Use Box or other MUI components
1. [More Styling Info](https://mui.com/customization/how-to-customize/)

## Deploying

GitHub will trigger a deploy to Netlify every time someone pushes changes to the main branch

`$ git checkout main`
`$ git merge <developer name>`
`$ git push`

## Remotes

- [Production](https://getnoxx.com)
- [Staging](https://v2.staging.getnoxx.com/)

## Local ENV Variables

The following variables should be used locally in `.env`

```env
REACT_APP_FACEBOOK_APP_ID='1547693848898211'
REACT_APP_GOOGLE_CLIENT_ID='379494463214-lc6738ro1c2ujqijmh0f3pni3hu4ef9o.apps.googleusercontent.com'
REACT_APP_RAILS_API_URL='https://api.noxx.dev2.hdwebsoft.co'
REACT_LOG_ROCKET_APP_ID='nrxvjp/noxx-dev'
GOOGLE_ANALYTICS_ID='UA-220982994-1'
PUBLIC_URL='http://localhost:3000'
HJID='2853310'
HJSV='6'
```

The frontend will run with a connection to staging rails, to connect to a local instance of the rails app, change the value of the line below to `http://127.0.0.1:3001` (or whatever port you are using).

```env
REACT_APP_RAILS_API_URL='https://noxx-rails-staging.herokuapp.com'
```
