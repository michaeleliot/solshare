const mongoose = require('mongoose')
let UserSchema = new mongoose.Schema(
    {
        description: String,
        name: String,
        profile_img: String,
        total_money_made: Number,
        invested: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Location'
            }
        ],
        projects: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Location'
            }
        ]
    }
);

UserSchema.methods.startProject = function(c) {
    this.projects.push(c)
    return this.save()
}

UserSchema.methods.invest = function(c) {
    this.investors.push(c)
    return this.save()
}
module.exports = mongoose.model('User', UserSchema)
