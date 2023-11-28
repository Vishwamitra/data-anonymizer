/**
 * Represent a name of the column and type
 * of faker library data used to generate
 * random / fake data for that column
 *
 * @date 28/11/2023 - 14:32:24
 *
 * @export
 * @interface Column
 * @typedef {Column}
 */

export interface Column {
  name: string;
  type: string;
}

/**
 * Represents table and columns which are
 * supposed to be anonymized
 * @date 28/11/2023 - 14:31:52
 *
 * @export
 * @interface Table
 * @typedef {Table}
 */
export interface Table {
  table_name: string;
  primary_key?: string;
  foreign_key?: string;
  columns: Column[];
}

/**
 * Parent config type which holds list
 * of all tables to be anonymized in a
 * given database.
 * @date 28/11/2023 - 14:32:05
 *
 * @export
 * @interface Config
 * @typedef {Config}
 */
export interface Config {
  tables: Table[];
}
