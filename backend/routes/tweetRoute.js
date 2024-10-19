// import express from 'express'
// import { createTweet, deleteTweet, getAllTweets, getFollowingTweets, likeOrDislike } from '../controllers/tweetController.js';
// import isAuthenticated from '../config/auth.js';

// const router = express.Router();

// router.route('/create').post(isAuthenticated, createTweet)
// router.route('/delete/:id').delete(isAuthenticated, deleteTweet)
// router.route('/like/:id').put(isAuthenticated,likeOrDislike)
// router.route('/alltweets/:id').get(isAuthenticated,getAllTweets)
// router.route('/followingtweets/:id').get(isAuthenticated,getFollowingTweets)



// export default router; 

import express from 'express';
import { 
    createTweet, 
    deleteTweet, 
    getAllTweets, 
    getFollowingTweets, 
    likeOrDislike 
} from '../controllers/tweetController.js';
import isAuthenticated from '../config/auth.js';

const router = express.Router();

// Route to create a new tweet (POST)
router.route('/tweets').post(isAuthenticated, createTweet);

// Route to delete a tweet by ID (DELETE)
router.route('/tweets/:id').delete(isAuthenticated, deleteTweet);

// Route to like or dislike a tweet by ID (PUT)
router.route('/tweets/:id/like').put(isAuthenticated, likeOrDislike);

// Route to get all tweets (optional: by a specific user) (GET)
router.route('/tweets').get(isAuthenticated, getAllTweets);

// Route to get tweets of users that the current user follows (GET)
router.route('/tweets/following').get(isAuthenticated, getFollowingTweets);

export default router;
