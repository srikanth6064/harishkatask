let express = require("express");
let mongodb = require("mongodb");
let cors = require("cors");
let nareshIT = mongodb.MongoClient;
let app = express();
app.use(cors());
app.get("/products",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/sreedb",
                    (err,db)=>{
        db.collection("products").find()
          .toArray((err,array)=>{
            if(err)
                throw err;
            else
                res.send(array);
        });
    });
});
app.listen(8000);
console.log("server listening the port no.8080");