const express = require('express');
const helmet = require('helmet');

const dishRouter = require('../routers/dish-router');
const recipeRouter = require('../routers/recipe-router');
const ingredientRouter = require('../routers/ingredient-router');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/dishes', dishRouter);
// server.use('/api/ingredients', ingredientRouter);
// server.use('/api/recipes', recipeRouter);

module.exports = server;