export interface IDatabaseConfigAttr {
    username?: string;
    password?: string;
    database?: string;
    host?: string;
    port?: string;
    dialect?: string;
    urlDatabase?: string
}

export interface IDatabaseConfig {
    development: IDatabaseConfigAttr;
    test: IDatabaseConfigAttr;
    production: IDatabaseConfigAttr;

}