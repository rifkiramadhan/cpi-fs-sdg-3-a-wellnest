const expressAsyncHandler = require('express-async-handler');

//-------------------------------------
// Create Post
//-------------------------------------
const createPostCtrl = expressAsyncHandler(async (req, res) => {});

//-------------------------------------
// Fetch All Posts
//-------------------------------------
const fetchPostsCtrl = expressAsyncHandler(async (req, res) => {});

//-------------------------------------
// Fetch a Single Post
//-------------------------------------
const fetchPostCtrl = expressAsyncHandler(async (req, res) => {});

//-------------------------------------
// Update Post
//-------------------------------------
const updatePostCtrl = expressAsyncHandler(async (req, res) => {});

//-------------------------------------
// Delete Post
//-------------------------------------
const deletePostCtrl = expressAsyncHandler(async (req, res) => {});

//-------------------------------------
// Likes
//-------------------------------------
const toggleAddLikeToPostCtrl = expressAsyncHandler(
  async (req, res) => {
    // 1. Find the post to be like
    // 2. Find the login user
    // 3. Find is this user has liked this post?
    // 4. Check if this user has dislikes this post?
    // 5. Remove the user from dislikes array if exists
  }

  // Toggle
  // 6 Remove the user if he has liked the post
);

//-------------------------------------
// Dislikes
//-------------------------------------
const toggleAddDislikeToPostCtrl = expressAsyncHandler(async (req, res) => {
  // 1. Find the post to be disLiked
  // 2. Find the login user
  // 3. Check if this user has already disLikes
  // 4. Check if already like this post
  // 5. Remove this user from likes array if it exists
  // Toggling
  // 6. Remove this user from dislikes if already disliked
});

module.exports = {
  createPostCtrl,
  fetchPostsCtrl,
  fetchPostCtrl,
  updatePostCtrl,
  deletePostCtrl,
  toggleAddLikeToPostCtrl,
  toggleAddDislikeToPostCtrl,
};
