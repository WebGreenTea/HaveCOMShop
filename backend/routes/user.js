const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')
const bodyPaser = require('body-parser')
const md5 = require('md5');
const jwt = require('jsonwebtoken')

const JWT_SECRET = "kjhkjh*&^lkhlkh)(*)KLJHKHJG^%$kuhsdflsdfshbss"
// Creating one
router.post('/register', async (req, res) => {
    //console.log(req.body)
    /*if(req.body.password.length < 8){
        return res.json({ msg: '' })
    }*/
    req.body.password = md5(req.body.password)
    //console.log(req.body.password)

    try {
        const response = await UserModel.create(req.body)
        //console.log('user created successfully' + response)
        return res.json({ status: 'ok' })
    } catch (error) {
        return res.json({ status: 'error' })
    }
})
router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({ username }).lean()
    if (!user) {
        return res.json({ status: 'err', error: 'Invalid username or password' })
    }
    else if (user.password == md5(password)) {
        const token = jwt.sign({
            id: user._id,
            username: user.username
        }, JWT_SECRET
        )
        return res.json({ status: 'ok', data: token })
    }
    else {
        //console.log('--------------------------------------------------------------')
        return res.json({ status: 'err', error: 'Invalid username or password' })
    }
    //console.log(user);
})

router.post('/verify-token', async (req, res) => {
    const token = req.body.token
    //console.log(req.body)
    try {
        const user = jwt.verify(token, JWT_SECRET)
        return res.json({ username: (user.username), id: (user.id), login: true })
    } catch (e) {
        return res.json({ username: "", login: false })
    }
})

/*router.put('/addToCart', async (req, res, next) => {
    let userID = req.body.userID
    let productID = req.body.productID
    let count = req.body.count
    let userdata = await UserModel.find({ _id: userID, "cart.productID": productID }, (err) => {
        if (err) {
            return next(err)
        }
    })
    let sizeObj = 0
    for (let key in userdata) {
        if (userdata.hasOwnProperty(key)) {
            sizeObj++;
        }
    }

    console.log(userdata)

    if (!sizeObj) {

        await UserModel.findOneAndUpdate({ "_id": userID }, {
            $push: { "cart": { productID: productID, count: count } }
        })
    }else{
        
    } 
    
    /*else {
        
        let countloop = 0
        let flag = true
        for (let cart of userdata.cart) {

            if (cart.productID == productID) {
                userdata.cart[countloop].count += count
                flag = false
                break
            }
            countloop += 1
        }
        if (flag) {
            
            userdata.cart.push({ productID: productID, count: count })
        }
        await UserModel.findByIdAndUpdate(userID, {
            cart: userdata.cart
        }, (err) => {
            if (err) {
                return next(err)
            }
        })

    }
    res.json({ status: 'success' })



})*/




module.exports = router