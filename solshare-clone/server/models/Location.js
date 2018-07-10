const mongoose = require('mongoose')
let LocationSchema = new mongoose.Schema(
    {
        description: String,
        name: String,
        feature_img: String,
        square_footage: Number,
        total_funded: { type: Number, default: 0 },
        likes: { type: Number, default: 0 },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        investors: [
            {
                investor: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                amount: Number
            }
        ]
    }
);

LocationSchema.methods.addOwner = function (owner_id) {
    this.owner = owner_id
    return this.save()
}

LocationSchema.methods.likeLocation = function (owner_id) {
    this.likes++
    return this.save()
}

LocationSchema.methods.getLocations = function (_id) {
    Location.find({'owner': _id}).then((location) => {
        return location
    })
}

LocationSchema.methods.invest = function(c) {
    this.total_funded += c.amount
    this.investors.push(c)
    return this.save()
}
module.exports = mongoose.model('Location', LocationSchema)
