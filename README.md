# Vocula web client

This reference web client is a SPA (single-page application) project based on the Angular framework for presentation of content provided by Vocula app through its REST API.
The project can be used as a starting point to create a custom web client for this content provider.

## What is the Vocula app?

[Vocula](https://github.com/impello-msoukup/vocula) is an open source content provider powered by REST API and based on simplicity of Markdown and YAML files.
These files combine content (text & images) and metadata structured into a directory tree.

## How to run client in development mode

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to setup connectivity to REST API

All main configurations needs to be setup in environment file `src/environments/environment.ts`:

* `apiUrl` as URL of Vocula REST API server
* `siteName` as default site of content
* `language` as default language of content

Needs to be created separated copy of `src/environments/environment.prod.ts` file for production release with production parameters.

## How to build the project

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
