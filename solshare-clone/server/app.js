// server/app.js

/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const Location = require('./models/Location')
const User = require('./models/User')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium"

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'michaeleliot',
    api_key: '931187324269153',
    api_secret: 'IQLULPV55PP6BXNkwN5H2gyj644'
})

/** connect to MongoDB datastore */
var resetData = true
if (resetData === true) {
  Location.collection.drop()
  User.collection.drop()
  const goodUser = new User({name: "Good Guy", description: "Super good guy", profile_img: "https://i.kym-cdn.com/entries/icons/original/000/023/598/Waterguy_irl.jpg", total_money_made: 100})
  goodUser.save()
  const nefariousUser = new User({name: "Nefarious Guy", description: "Nefarious guy 5 sure", profile_img: "https://vignette.wikia.nocookie.net/fantendo/images/b/b6/Fire_Guy.png/revision/latest?cb=20120702111203", total_money_made: 10})
  nefariousUser.save()
  const coolPlace = new Location({ name: "Cool Place",  owner: goodUser, description: "Honestly just a cool place.", address: "1234 Great Street", feature_img: "https://upload.wikimedia.org/wikipedia/commons/d/de/Hanalai_Beach_is_a_cool_place_to_hang_out_%288034645668%29.jpg" , square_footage: 100})
  coolPlace.save()
  const badPlace = new Location({ name: "Bad Place", owner: nefariousUser, description: "Not a very good place.", address: "666 Bad Way", feature_img: "https://vignette.wikia.nocookie.net/thegoodplace/images/d/d2/Hellfire.jpg/revision/latest?cb=20171021011455" , square_footage: 10})
  badPlace.save()
  const okPlace = new Location({ name: "Ok Place", owner: nefariousUser,description: "Middle of the road tbh.",  address: "583 Meh Avenue", feature_img: "https://cdn.onlyinyourstate.com/wp-content/uploads/2015/12/ok284-5-700x525.jpg" , square_footage: 50})
  okPlace.save().then(() => console.log("Done with data"))
  console.log(goodUser)
}
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })
} catch (error) {

}

let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
