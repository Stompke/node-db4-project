const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: "You made it to /api/recipes !!!" });
})

module.exports = router;