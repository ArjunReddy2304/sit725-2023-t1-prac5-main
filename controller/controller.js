let model = require("../model/model");

const getAllInfo = (req, res) => {
  model.getAllInfo((error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "success!" });
    } else {
      console.log(error);
    }
  });
};

const addInfo = (req, res) => {
    let info = req.body;
    model.addInfo(info, (error, result) => {
      if (!error) {
        res.json({ statusCode: 200, data: result, message: "Added" });
      } else {
        console.log(error);
        res.json({ statusCode: 400, data: error, message: "Failed" });
      }
    });
  };

  module.exports = {addInfo,getAllInfo}