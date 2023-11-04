const expressAsyncHandler = require('express-async-handler');
const Category = require('../../model/category/Category');

const createCategoryCtrl = expressAsyncHandler(async (req, res) => {
  try{
    const user = req.user
    const title = req.body.title

    const createCategory = await Category.create({
      title, user
    })

    return res.json({
      message: 'Category successfully created',
      ...createCategory
    })
  }
  catch(error) {
    return res.json(error)
  }
});

// Fetch Category
const fetchCategoriesCtrl = expressAsyncHandler(async (req, res) => {
  try{
    const allCategories = await Category.find({})
    return res.json(allCategories)
  }
  catch(error){
    return res.json(error)
  }
});

// Fetch All Categories
const fetchCategoryCtrl = expressAsyncHandler(async (req, res) => {
  const title = req.query.title

  try{
    const categoryByTitle = await Category.find({
      title: title
    })
    return res.json(categoryByTitle)
  }catch(error){
    return res.json(error)
  }
});

// Update Category
const updateCategoryCtrl = expressAsyncHandler(async (req, res) => {
  const title = req.body.title
  const user = req.user

  try{
    const updateCategory = await Category.updateOne({
      title: title,
      user: user
    })
  }catch(error){
    res.json(error)
  }
});

// Delete Category
const deleteCategoryCtrl = expressAsyncHandler(async (req, res) => {});

module.exports = {
  createCategoryCtrl,
  fetchCategoriesCtrl,
  fetchCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl,
};
