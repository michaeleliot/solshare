/** */
const User = require('./../models/User')
const Location = require('./../models/Location')

module.exports = {
    addUser: (req, res, next) => {
        new User(req.body).save((err, newUser) => {
            if (err)
                res.send(err)
            else if (!newUser)
                res.send(400)
            else
                res.send(newUser)
            next()
        });
    },
    getUser: (req, res, next) => {
        User.findById(req.params.id).then
        /*populate('following').exec*/((err, user)=> {
            if (err)
                res.send(err)
            else if (!user)
                res.send(404)
            else
                res.send(user)
            next()
        })
    },

    // getUserProfile: (req, res, next) => {
    //     User.findById(req.params.id).then
    //     ((_user) => {
    //         return User.find({'following': req.params.id}).then((_users)=>{
    //             _users.forEach((user_)=>{
    //                 _user.addFollower(user_)
    //             })
    //             return Location.find({'owner': req.params.id}).then((_locations)=> {
    //                 return res.json({ user: _user, locations: _locations })
    //             })
    //         })
    //     }).catch((err)=>console.log(err))
    // }
}
