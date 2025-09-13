const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('sixos/home')
});

router.get('/generalServices', (req, res)=>{
    res.render('sixos/generalServices')
});

router.get('/longTerm', (req, res)=>{
    res.render('sixos/longTerm')
});

module.exports = router;