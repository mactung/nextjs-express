const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send('Hello');
})
router.get('/login-facebook', (req, res) => {
    
})

module.exports = router;