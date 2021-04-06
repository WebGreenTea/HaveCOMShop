const express = require('express')
const router = express.Router()
const productModel = require('../models/product')
const bodyPaser = require('body-parser')
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const product = require('../models/product');

router.post('/addPD', async (req, res) => {
    //console.log(req.body)
    let data = {}
    try {
        console.log(req.body.review)
        data = {
            PDname: req.body.name,
            price: req.body.price,
            count: req.body.count,
            type: req.body.type,
            img: req.body.url.split("/")[5]
        }
        if (req.body.more) {
            data.detail = req.body.more
        } 
        if(req.body.review){
            let IDreview = (req.body.review).split("/")
            data.review = IDreview[IDreview.length-1]
        }
        //console.log(data)
        const response = await productModel.create(data)
        //console.log(response)
        res.json({ status: 'success' })
    } catch (error) {
        res.json({ status: 'error' })
    }
})

router.get('/getPD', async (req, res, next) => {
    await productModel.find((error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.json(data)
        }
    })
})

router.get('/getPD/:id', async (req, res) => {
    let product
    try {
        product = await productModel.findById(req.params.id)
        //console.log(product)
        if (product == null) {
            return res.status(404).json({ message: "Cannot find this Product" })
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    return res.json(product)
    
})

module.exports = router