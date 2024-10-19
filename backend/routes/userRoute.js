// import express from 'express'
// import isAuthenticated from '../config/auth.js';
// import { Register,Login,Logout, bookmark, getMyProfile, getOtherUsers, follow, unfollow } from '../controllers/userController.js'

// const router = express.Router();

// router.route('/register').post(Register)
// router.route('/login').post(Login)
// router.route('/logout').get(Logout)
// router.route('/bookmark/:id').put(isAuthenticated,bookmark)
// // router.route('/profile/:id').get(isAuthenticated,getMyProfile)
// router.route('/otherUser/:id').get(isAuthenticated,getOtherUsers)
// router.route('/follow/:id').post(isAuthenticated,follow)
// router.route('/unfollow/:id').post(isAuthenticated,unfollow)


// export default router; 



import express from 'express';
import isAuthenticated from '../config/auth.js';
import { 
    Register, 
    Login, 
    Logout, 
    bookmark, 
    getMyProfile, 
    getOtherUsers, 
    follow, 
    unfollow 
} from '../controllers/userController.js';

const router = express.Router();

// User registration (POST)
router.route('/register').post(Register);

// User login (POST)
router.route('/login').post(Login);

// User logout (GET)
router.route('/logout').get(Logout);

// Bookmark a tweet by ID (PUT)
router.route('/users/:userId/bookmark/:tweetId').put(isAuthenticated, bookmark);

// Get user profile (GET)
router.route('/users/:id/profile').get(isAuthenticated, getMyProfile);

// Get other users (GET)
router.route('/users/other/:id').get(isAuthenticated, getOtherUsers);

// Follow a user by ID (POST)
router.route('/users/:userId/follow').post(isAuthenticated, follow);

// Unfollow a user by ID (POST)
router.route('/users/:userId/unfollow').post(isAuthenticated, unfollow);

export default router;
