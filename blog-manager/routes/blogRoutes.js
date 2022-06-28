const express = require('express')
const router = express.Router()

const blogController = require('../controller/blogController')


/*routes*/
router.get('/', blogController.getAll);
router.get('/:id', blogController.get);
router.post('/', blogController.create);
router.put('/:id', blogController.update);
router.delete('/:id' , blogController.deleteBlog);






module.exports = router;