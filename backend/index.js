

const express = require('express')
const app = express()
const port = 5002
const mongoDB=require("./database")
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use('/api',require("./Routes/CreateUser"));   //type of middleware  jo different routes honge routes folder ke andar unko yaha call karenge with the help of app.use()
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
mongoDB();
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.use(cors({
//   origin: '*',
//   credentials: true

// }));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})