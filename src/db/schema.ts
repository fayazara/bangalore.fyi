/**
 * Database schema.
 *
 * bangalore.fyi is currently running on static/mock data while the UI is
 * being built out (see `src/data/*`). Tables for cafes, events,
 * classifieds, etc. will be added here once we wire up the backend.
 *
 * Workflow once we add a table:
 *   1. Define it below with drizzle-orm/sqlite-core
 *   2. `npm run db:generate` - writes SQL to ./drizzle
 *   3. `npm run db:migrate`  - applies it to local D1
 *   4. `npm run db:migrate:prod` - applies it to remote D1
 */
export {}
