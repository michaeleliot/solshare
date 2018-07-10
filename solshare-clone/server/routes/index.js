// server/routes/index.js
const user = require('./user')
const location = require('./location')
module.exports = (router) => {
    user(router)
    location(router)
}
