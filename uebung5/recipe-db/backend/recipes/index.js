const Router = require('express').Router;
const controller = require('controller');

const router = Router();

router.get('/', controller.getAllAction);
router.get('/:id', controller.getOneAction);
router.post('/', controller.createAction);
router.put('/:id', controller.updateAction);
router.delete('/:id', controller.deleteAction);

module.exports = router;
