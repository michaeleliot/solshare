const Location = require('./../models/Location')
const User = require('./../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')
module.exports = {
    addLocation: (req, res, next) => {
        let { name, square_footage, description } = req.body
        //TODO get image working req.body.files.image
        if (false) {
            cloudinary.uploader.upload(req.body.files.image.path, (result) => {
                let obj = { name, square_footage, description, feature_img: result.url != null ? result.url : '' }
                saveLocation(obj)
            },{
                resource_type: 'image',
                eager: [
                    {effect: 'sepia'}
                ]
            })
        }else {
            saveLocation({ name, square_footage, description, feature_img: '' })
        }
        function saveLocation(obj) {
            new Location(obj).save((err, location) => {
                if (err)
                    res.send(err)
                else if (!location)
                    res.send(400)
                else {
                    return location.addOwner(req.body.owner_id).then((_location) => {
                        return res.send(_location)
                    })
                }
                next()
            })
        }
    },
    getAll: (req, res, next) => {
        Location.find(req.params.id)
        .populate('owner')
        .populate('investors.investor').exec((err, location)=> {
            if (err)
                res.send(err)
            else if (!location)
                res.send(404)
            else
                res.send(location)
            next()
        })
    },

    investInLocation: (req, res, next) => {
        Location.findById(req.body.location_id).then((location)=> {
            return location.invest({
                investor: req.body.investor_id,
                amount: req.body.amount
            }).then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },

    getLocation: (req, res, next) => {
        Location.findById(req.params.id)
        .populate('owner')
        .populate('investors.investor').exec((err, location)=> {
            if (err)
                res.send(err)
            else if (!location)
                res.send(404)
            else
                res.send(location)
            next()
        })
    },

    likeLocation: (req, res, next) => {
      Location.findById(req.params.id).then((location) => {
        return location.likeLocation().then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    }
}
