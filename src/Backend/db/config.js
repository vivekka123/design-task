const mongoose=require('mongoose');
const mongo_url="mongodb://127.0.0:27017/backend"

exports.connect=()=>{
    mongoose.connect(mongo_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Successfully Connected")
    })
    .catch((error)=>{
        console.log("Connection Failed")
    });
};