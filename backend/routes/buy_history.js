const express = require('express')
const router = express.Router()
const buy_historyModel = require('../models/buy_history')


router.post('/addHistory/', async (req, res, next) => {
    let date = new Date();
    let build  = false;
    if(req.body.build){
        build = true;
    }
    await buy_historyModel.create({
        date: date,
        userID:req.body.userID,
        paymentType:req.body.paymentType,
        build:build,
        detail:req.body.detail,
        total:req.body.total,
        address:req.body.address,

    },(err,data)=>{
        if(err){
            return next(err);
        }
        res.json({msg:'save in history successful'})
    })

})


module.exports = router