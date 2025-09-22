const express = require('express');
const router = express.Router();

// The HomePage
router.get('/', (req, res)=>{
    res.render('sixos/home')
});

// General Services Page
router.get('/generalServices', (req, res)=>{
    res.render('sixos/generalServices')
});

//Long Term Services Page
router.get('/longTerm', (req, res)=>{
    res.render('sixos/longTerm')
});

module.exports = router;