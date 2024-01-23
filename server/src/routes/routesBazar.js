const { Router } = require('express');

const router = Router();

const getByName = require('../Proyects/Bazar/getByName');
const getDetail = require('../Proyects/Bazar/getDetail');

router.get('/items', async (req, res) => {
  const { name } = req.query;
  try {
    const products = await getByName({ name })
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getDetail({ id })
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})

module.exports = router;