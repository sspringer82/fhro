const router = require('express').Router();
const { getAll, getOne, create } = require('./controller');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);

module.exports = router;
