const express = require('express');
const router = express.Router();
const Style = require('../models/Style')

router.post('/', async (req, res) => {
    const style = new Style({
        styleCode: req.body.styleCode
    })
    try {
        console.log("style", style);
        const savedStyle = await style.save()
        res.json(savedStyle) 
        console.log("savedStyle", savedStyle);
    } catch (err) { 
        res.json({ message: err })
    }
})

module.exports = router;
