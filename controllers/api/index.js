const routerxyz = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
routerxyz.use('/users', userRoutes);
routerxyz.use('/post', postRoutes);
module.exports = routerxyz;
