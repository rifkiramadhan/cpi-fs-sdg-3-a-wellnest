const expressAsyncHandler = require('express-async-handler');

//-------------------------------------
// Create Comment
//-------------------------------------
const createCommentCtrl = expressAsyncHandler(async (req, res) => {
  // 1. Get The User
  // 2. Get The Post Id
});

//-------------------------------------
// Fetch All Comments
//-------------------------------------
const fetchAllCommentsCtrl = expressAsyncHandler(async (req, res) => {});

//-------------------------------------
// Comment Details
//-------------------------------------
const fetchCommentCtrl = expressAsyncHandler(async (req, res) => {});

//-------------------------------------
// Update
//-------------------------------------
const updateCommentCtrl = expressAsyncHandler(async (req, res) => {});

//-------------------------------------
// Delete Comment
//-------------------------------------
const deleteCommentCtrl = expressAsyncHandler(async (req, res) => {});

module.exports = {
  createCommentCtrl,
  fetchAllCommentsCtrl,
  fetchCommentCtrl,
  updateCommentCtrl,
  deleteCommentCtrl,
};
