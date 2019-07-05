const router = require('express').Router();

const Candy = require('../db/models/Candy');

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    if (!candies) {
      res.sendStatus(404);
    } else {
      res.send(candies);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
