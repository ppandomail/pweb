const { config } = require("dotenv");
config();

const MONGODB_USR = process.env.MONGODB_USR;
const MONGODB_PWD = process.env.MONGODB_PWD;

module.exports = { MONGODB_USR, MONGODB_PWD }