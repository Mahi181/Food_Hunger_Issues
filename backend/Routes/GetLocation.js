// const express = require("express");
// const router = express.Router();


// router.post('/getlocation', async (req, res) => {
//     try {
//         let lat = req.body.latlong.lat
//         let long = req.body.latlong.long
//         console.log(lat, long)
//         let location = await axios
//             .get("https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + long + "&key=74c89b3be64946ac96d777d08b878d43")
//             .then(async res => {
//                 // console.log(`statusCode: ${res.status}`)
//                 console.log(res.data.results)
//                 // let response = stringify(res)
//                 // response = await JSON.parse(response)
//                 let response = res.data.results[0].components;
//                 console.log(response)
//                 let { village, county, state_district, state, postcode } = response
//                 return String(village + "," + county + "," + state_district + "," + state + "\n" + postcode)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//         res.send({ location })

//     } catch (error) {
//         console.error(error.message)
//         res.send("Server Error")

//     }
// })
// router.post('/foodData', async (req, res) => {
//     try {
//         // console.log( JSON.stringify(global.foodData))
//         // const userId = req.user.id;
//         // await database.listCollections({name:"food_items"}).find({});
//         res.send([global.foodData, global.foodCategory])
//     } catch (error) {
//         console.error(error.message)
//         res.send("Server Error")

//     }
// })
// //module.exports = router;