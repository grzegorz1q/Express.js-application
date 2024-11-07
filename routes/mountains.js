const { Router } = require('express');
const path = require('path');


const router = Router();
const mountainController = require('../controllers/mountainController');
const validateMountain = require('../middlewares/validateMountain');
const validateMountainFilter = require('../middlewares/validateMountainFilter');
const validatePhoto = require('../middlewares/validatePhoto');

const upload = require('../multer/multerConfiguration'); 

router.get('/', mountainController.mountainsList);
router.get('/mountainPost', mountainController.getMountainPostForm);
router.get('/mountainsGetByLocationAndHeight', mountainController.getMountainsByLocationAndHeightForm);
router.post('/mountain', upload.array('images', 10), validateMountain, mountainController.addMountain);
router.get('/mountain', validateMountainFilter, mountainController.getMountainsByLocationAndHeight);
router.get('/:id', mountainController.getMountainInfoById);
router.get('/climber/:id', mountainController.getMountainByClimberId);
router.get('/:id/photoPost', mountainController.getPhotoPostForm);
router.post('/:id/photo', upload.array('images', 10), validatePhoto, mountainController.addPhoto);

module.exports = router;