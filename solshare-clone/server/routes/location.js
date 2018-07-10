const locationcontroller = require('./../controllers/location.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {

    /**
     * get all locations
     */
    router
        .route('/locations')
        .get(locationcontroller.getAll)

    /**
     * add a location
     */
    router
        .route('/location')
        .post(multipartWare, locationcontroller.addLocation)

    /**
     * invest in a location
     */
    router
        .route('/location/invest')
        .post(locationcontroller.investInLocation)


    /**
     * lije a location
     */
    router
        .route('/location/like')
        .post(locationcontroller.likeLocation)

    /**
     * get a particlular location to view

     */
    router
        .route('/location/:id')
        .get(locationcontroller.getLocation)
}
