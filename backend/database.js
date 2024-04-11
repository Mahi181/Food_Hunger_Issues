const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoURI = 'mongodb+srv://mahiman:test1234@cluster0.rscrpzf.mongodb.net/Hunger_issues?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
   
        await mongoose.connect(mongoURI, { useNewUrlParser: true },async(err,result)=>{
     if(err)  console.log("---",err)
     else{
            console.log("Connected successfully");
            
            const fetched_data = await mongoose.connection.db.collection("sample");
             fetched_data.find({}).toArray(async function (err,data){
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
               foodCategory.find({}).toArray(async function (err, Catdata) {
             
                 if(err)  console.log(err)
                 else{
                    global.sample=data;
                    global.foodCategory=Catdata;
                 }
                })

            });
            // console.log(data); //we will not do console.log we will store the data in the variable and with the help of endpoint we will send it to the frontend
    //         global.sample=data;
     }
       
    });
    };

module.exports = mongoDB;




// const mongoose = require('mongoose')
// // const mongoDbClient = require("mongodb").MongoClient
// const mongoURI='mongodb+srv://mahiman:test1234@cluster0.rscrpzf.mongodb.net/Hunger_issues?retryWrites=true&w=majority'
// // mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("sample");
//             foodCollection.find({}).toArray(async function (err, data) {
//                 const categoryCollection = await mongoose.connection.db.collection("Categories");
//                 categoryCollection.find({}).toArray(async function (err, Catdata) {
//                     callback(err, data, Catdata);

//                 })
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };

