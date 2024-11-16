const express = require('express');
const Book = require('../models/book');
const router = express.Router();


// get all books
router.get('/', async(req,res)=>{
    try{
        const books = await Book.find({})
        return res.status(200).json({
            count:books.length,
            data:books
        })
        
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send({
            message:err.message
        })
    }
})

module.exports = router;