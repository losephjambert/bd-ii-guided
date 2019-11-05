# Requirements

Build an API to support managing pets.

The client wants to:

- save information about their pets. For each pet they'd like to record:
  - name.
  - species (dog, cat, iguana, hamster, fish, horse <- is a horse a pet?).
  - breed (optional, if any).
  - food (what does it eats?)
  - weight (as a floating number)
  - weightUnit (optional, lb, kg)
- see a list of all their pets.
- update their pet's information.
- mark a pet as 'owned' (true/false).

Started an Express JS API.

- npm packages installed: express, helmet, knex, sqlite3 and nodemon as dev dependency.

Migrations are a way to record changes to the database schema

**EVERY CHANGE TO THE DATABASE SCHEMA (_STRUCTURE_) MUST BE DONE WITH A NEW MIGRATION**

## Migrations

Optionally install knex globally to make it available anywhere: `npm i -g knex` `yarn global add knex`

Initialize knex for our project: `npx knex init` ==> ./knexfile.js

Create a migration `npx knex migrate:make name`

Run a migration `npx knex migrate:up`

Undo last migration `npx knex migrate:down`

Update database to latest changes/migrations `npx knex migrate:latest` <== multiple new migrations

Undo multiple migrations that ran together `npx knex migrate:rollback`
