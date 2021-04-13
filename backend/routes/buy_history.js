const express = require('express')
const router = express.Router()
const buy_historyModel = require('../models/buy_history')


router.post('/addHistory/', async (req, res, next) => {
    let date = new Date();
    await buy_historyModel.create({
        date: date,
        userID:req.body.userID,
        paymentType:req.body.paymentType,
        detail:req.body.detail,
        total:req.body.total
    },(err,data)=>{
        if(err){
            return next(err);
        }
        res.json({msg:'save in history successful'})
    })

})


module.exports = router