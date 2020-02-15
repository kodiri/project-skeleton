const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    re.send('server is up and running');
});

module.exports = router;