let client = require("../dbconnection");
let dbcollection = client.db().collection("Info"); 

function addInfo(info, callBack) {
    dbcollection.insertOne(info, callBack);
    console.log(info)
  }

function getAllInfo(callBack) {
  dbcollection.find({}).toArray(callBack);
}




module.exports = { addInfo , getAllInfo }


