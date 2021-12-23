module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "K9o031st8",
    DB: "restaurants",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};