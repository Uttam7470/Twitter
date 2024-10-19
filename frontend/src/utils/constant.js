// // export const USER_API_END_POINT="http://localhost:8080/api/v1/user" ;
// // export const TWEET_API_END_POINT="http://localhost:8080/api/v1/tweet"

// export const USER_API_END_POINT="https://twitter-ya90.onrender.com/api/v1/user" ;
// export const TWEET_API_END_POINT="https://twitter-ya90.onrender.com/api/v1/tweet"



// export const timeSince = (timestamp) => {
//     let time = Date.parse(timestamp);
//     let now = Date.now();
//     let secondsPast = (now - time) / 1000;
//     let suffix = 'ago';

//     let intervals = {
//         year: 31536000,
//         month: 2592000,
//         week: 604800,
//         day: 86400,
//         hour: 3600,
//         minute: 60,
//         second: 1
//     };

//     for (let i in intervals) {
//         let interval = intervals[i];
//         if (secondsPast >= interval) {
//             let count = Math.floor(secondsPast / interval);
//             return `${count} ${i} ${count > 1 ? 's' : ''} ${suffix}`;
//         }
//     }
// }

// API Endpoints
export const USER_API_END_POINT = "https://twitter-ya90.onrender.com/api/v1/user";
export const TWEET_API_END_POINT = "https://twitter-ya90.onrender.com/api/v1/tweet";

// Function to calculate the time since a given timestamp
export const timeSince = (timestamp) => {
    // Ensure timestamp is a valid date
    if (!timestamp) {
        return 'Invalid date';
    }

    const time = Date.parse(timestamp);
    if (isNaN(time)) {
        return 'Invalid date';
    }

    const now = Date.now();
    const secondsPast = (now - time) / 1000;
    const suffix = 'ago';

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    for (const i in intervals) {
        const interval = intervals[i];
        if (secondsPast >= interval) {
            const count = Math.floor(secondsPast / interval);
            return `${count} ${i} ${count > 1 ? 's' : ''} ${suffix}`;
        }
    }

    return 'Just now'; // For cases where the time is less than a second
};
