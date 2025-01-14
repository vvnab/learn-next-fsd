import { PGlite } from "@electric-sql/pglite";
import { uuid_ossp } from "@electric-sql/pglite/contrib/uuid_ossp";

export const client = new PGlite("./pgdata", { extensions: { uuid_ossp } });