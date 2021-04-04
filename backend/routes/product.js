const express = require('express')
const router = express.Router()
const productModel = require('../models/product')
const bodyPaser = require('body-parser')
const md5 = require('md5');
const jwt = require('jsonwebtoken')

router.post('/addPD', async (req, res) => {
    //console.log(req.body)
    let data = null
    try {
        (req.body.url).split("/")
        if(req.body.more){
            data = {
                PDname: req.body.name,
                price: req.body.price,
                count: req.body.count,
                img:req.body.url.split("/")[5],
                type:req.body.type,
                detail: req.body.more
            }
        }else{
            data = {
                PDname: req.body.name,
                price: req.body.price,
                count: req.body.count,
                type:req.body.type,
                img:req.body.url.split("/")[5]
    
            }
        }
        //console.log(data)
        const response = await productModel.create(data)
        //console.log(response)
        return res.json({ status: 'success' })
    } catch (error) {
        return res.json({ status: 'error' })
    }
})

router.get('/getPD',async(req,res,next) =>{
    productModel.find((error,data) =>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})




module.exports = router