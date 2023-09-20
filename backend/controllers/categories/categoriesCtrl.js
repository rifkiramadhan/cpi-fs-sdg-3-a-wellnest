const expressAsyncHandler = require('express-async-handler');

const createCategoryCtrl = expressAsyncHandler(async (req, res) => {});

// Fetch Category
const fetchCategoriesCtrl = expressAsyncHandler(async (req, res) => {});

// Fetch All Categories
const fetchCategoryCtrl = expressAsyncHandler(async (req, res) => {});

// Update Category
const updateCategoryCtrl = expressAsyncHandler(async (req, res) => {});

// Delete Category
const deleteCategoryCtrl = expressAsyncHandler(async (req, res) => {});

module.exports = {
  createCategoryCtrl,
  fetchCategoriesCtrl,
  fetchCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl,
};
