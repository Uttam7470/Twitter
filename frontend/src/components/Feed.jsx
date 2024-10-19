// import React from 'react'
// import CreatePost from './CreatePost'
// import Tweet from './Tweet'
// import { useSelector } from 'react-redux'

// function Feed() {
//   const {tweets} = useSelector(store => store.tweet)
//   return (
//     <div className='w-[50%] border border-gray-300' >
//         <div>
//             <CreatePost />
//             {/* <Tweet /> */}
//             {
//               tweets?.map((tweet)=> <Tweet key={tweet?._id} tweet={tweet}/>)
//             }
            
//         </div>
//     </div>
//   )
// }

// export default Feed



import React from 'react';
import CreatePost from './CreatePost';
import Tweet from './Tweet';
import { useSelector } from 'react-redux';

function Feed() {
    const { tweets } = useSelector((store) => store.tweet);

    return (
        <div className='w-[50%] border border-gray-300'>
            <CreatePost />
            <div>
                {tweets?.length > 0 ? (
                    tweets.map((tweet) => <Tweet key={tweet?._id} tweet={tweet} />)
                ) : (
                    <p className='text-center py-4 text-gray-600'>No tweets available.</p>
                )}
            </div>
        </div>
    );
}

export default Feed;
