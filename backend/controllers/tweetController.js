// import { Tweet } from "../models/tweetSchema.js";
// import { getOtherUsers } from "./userController.js";
// import { User } from "../models/userSchema.js";

// export async function createTweet(req, res) {
//   try {
//     const { description, id } = req.body;
//     if (!description || !id) {
//       return res.status(401).json({
//         message: "Fields are required.",
//         success: false,
//       });
//     }
//     const user = await User.findById(id).select('-password')
//     await Tweet.create({
//       description,
//       userId: id,
//       userDetails : user,
//     });
//     return res.status(201).json({
//       message: "Tweet created successfully.",
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function deleteTweet(req, res) {
//   try {
//     const { id } = req.params;
//     await Tweet.findByIdAndDelete(id);
//     return res.status(200).json({
//       message: "Tweet deleted successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function likeOrDislike(req, res) {
//   try {
//     const loggedInUserId = req.body.id;
//     const tweetId = req.params.id;
//     const tweet = await Tweet.findById(tweetId);
//     if (tweet.like.includes(loggedInUserId)) {
//       // dislike
//       await Tweet.findByIdAndUpdate(tweetId, {$pull: { like: loggedInUserId }});
//       return res.status(200).json({
//         message: "User disliked your tweet.",
//       });
//     } else {
//       await Tweet.findByIdAndUpdate(tweetId, {$push: { like: loggedInUserId }});
//       return res.status(200).json({
//         message: "User liked your tweet.",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }


// export async function getAllTweets(req, res) {
//   try {
//     const id = req.params.id.trim();  // Trim the id to remove any extra spaces
//     const loggedInUser = await User.findById(id);
//     const loggedInUserTweets = await Tweet.find({ userId: id });
//     const followingUserTweet = await Promise.all(
//       loggedInUser.following.map((OtherUsersId) => {
//         return Tweet.find({ userId: OtherUsersId });
//       })
//     );
//     return res.status(200).json({
//       tweets: loggedInUserTweets.concat(...followingUserTweet),
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getFollowingTweets(req,res){
//   try {
//     const id = req.params.id.trim();  // Trim the id to remove any extra spaces
//     const loggedInUser = await User.findById(id);

//     const followingUserTweet = await Promise.all(
//       loggedInUser.following.map((OtherUsersId) => {
//         return Tweet.find({ userId: OtherUsersId });
//       })
//     );
//     return res.status(200).json({
//       tweets: [].concat(...followingUserTweet),
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
















import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

// Create a new tweet
export async function createTweet(req, res) {
  try {
    const { description, id } = req.body;

    // Validate input
    if (!description || !id) {
      return res.status(400).json({
        message: "Description and user ID are required.",
        success: false,
      });
    }

    // Find user without returning the password field
    const user = await User.findById(id).select('-password');
    if (!user) {
      return res.status(404).json({
        message: "User not found.",
        success: false,
      });
    }

    // Create a new tweet
    await Tweet.create({
      description,
      userId: id,
      userDetails: user,
    });

    return res.status(201).json({
      message: "Tweet created successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Error creating tweet:", error);
    return res.status(500).json({
      message: "An error occurred while creating the tweet.",
      success: false,
    });
  }
}

// Delete a tweet
export async function deleteTweet(req, res) {
  try {
    const { id } = req.params;

    const tweet = await Tweet.findById(id);
    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found.",
        success: false,
      });
    }

    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Tweet deleted successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Error deleting tweet:", error);
    return res.status(500).json({
      message: "An error occurred while deleting the tweet.",
      success: false,
    });
  }
}

// Like or dislike a tweet
export async function likeOrDislike(req, res) {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;

    // Find the tweet
    const tweet = await Tweet.findById(tweetId);
    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found.",
        success: false,
      });
    }

    // Toggle like/dislike
    if (tweet.like.includes(loggedInUserId)) {
      // Dislike
      await Tweet.findByIdAndUpdate(tweetId, { $pull: { like: loggedInUserId } });
      return res.status(200).json({
        message: "User disliked the tweet.",
        success: true,
      });
    } else {
      // Like
      await Tweet.findByIdAndUpdate(tweetId, { $push: { like: loggedInUserId } });
      return res.status(200).json({
        message: "User liked the tweet.",
        success: true,
      });
    }
  } catch (error) {
    console.error("Error liking/disliking tweet:", error);
    return res.status(500).json({
      message: "An error occurred while processing your request.",
      success: false,
    });
  }
}

// Get all tweets for the logged-in user and their following
export async function getAllTweets(req, res) {
  try {
    const id = req.params.id.trim(); // Trim the ID to remove any extra spaces

    // Find the logged-in user
    const loggedInUser = await User.findById(id);
    if (!loggedInUser) {
      return res.status(404).json({
        message: "User not found.",
        success: false,
      });
    }

    // Get tweets from the logged-in user
    const loggedInUserTweets = await Tweet.find({ userId: id });

    // Get tweets from users the logged-in user is following
    const followingUserTweets = await Promise.all(
      loggedInUser.following.map((otherUserId) => {
        return Tweet.find({ userId: otherUserId });
      })
    );

    // Concatenate both logged-in user's and following users' tweets
    const allTweets = loggedInUserTweets.concat(...followingUserTweets);

    return res.status(200).json({
      tweets: allTweets,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return res.status(500).json({
      message: "An error occurred while fetching tweets.",
      success: false,
    });
  }
}

// Get tweets from users the logged-in user is following
export async function getFollowingTweets(req, res) {
  try {
    const id = req.params.id.trim(); // Trim the ID to remove any extra spaces

    // Find the logged-in user
    const loggedInUser = await User.findById(id);
    if (!loggedInUser) {
      return res.status(404).json({
        message: "User not found.",
        success: false,
      });
    }

    // Get tweets from users the logged-in user is following
    const followingUserTweets = await Promise.all(
      loggedInUser.following.map((otherUserId) => {
        return Tweet.find({ userId: otherUserId });
      })
    );

    return res.status(200).json({
      tweets: [].concat(...followingUserTweets),
      success: true,
    });
  } catch (error) {
    console.error("Error fetching following users' tweets:", error);
    return res.status(500).json({
      message: "An error occurred while fetching following users' tweets.",
      success: false,
    });
  }
}
