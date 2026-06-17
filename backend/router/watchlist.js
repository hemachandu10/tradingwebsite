const express = require('express')
const router = express.Router();
const Holdings = require('../Models/holdings')

router.post("/buy", async (req, res) => {
    console.log(req.body)
    let response = await Holdings.findOneAndUpdate(
        { name: req.body.stock.name },
        {
            $inc: { qty: Number(req.body.quntity) }
        },
        { returnDocument: "after" }
    );
    if (response == null) {
        let data = req.body.stock
        let result = await Holdings.create({
            name: data.name,
            qty: Number(req.body.quntity),
            avg: data.avg,
            price: data.price,
            net: data.net,
            day: data.day,
        });
    }
        res.json({success:true})
        
})

router.post("/sell", async (req, res) => {
    const holding = await Holdings.findOne({
        name: req.body.stock.name
    });

    const sellQty = Number(req.body.quntity);

    if (!holding) {
        return res.json({
            success: false,
            message: "Stock not found"
        });
    }

    if (holding.qty < sellQty) {
        return res.json({
            success: false,
            message: "Insufficient quantity"
        });
    }

    const response = await Holdings.findOneAndUpdate(
        { name: req.body.stock.name },
        { $inc: { qty: -sellQty } },
        { returnDocument: "after" }
    );

    res.json({
        success: true,
        holding: response
    });
});

module.exports = router;