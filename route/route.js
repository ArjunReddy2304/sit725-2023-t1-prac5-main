
let express = require('express');
let router = express.Router();
let controller = require('../controller/controller');


router.post('/', (req,res)=>{
    controller.addInfo(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllInfo(req,res);
});

module.exports = router;