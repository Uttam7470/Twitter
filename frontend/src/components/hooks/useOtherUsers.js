// import axios from "axios";
// import { USER_API_END_POINT } from "../../utils/constant";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getMyProfile } from "../../redux/userSlice";
// import { getOtherUsers } from  "../../redux/userSlice";

// const useOtherUsers = (id) => {
// const dispatch = useDispatch()
//   useEffect(()=>{
//     const fetchOtherUsers = async() =>{
//       try {
//         const res = await axios.get(`${USER_API_END_POINT}/otherUser/${id}`,{
//           withCredentials : true
//         });
//         console.log(res);
        
//         dispatch(getOtherUsers(res.data.otherUsers));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchOtherUsers()
   
//   },[])
  
// };

// export default useOtherUsers;


import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUsers } from "../../redux/userSlice";

const useOtherUsers = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      if (!id) {
        console.error("User ID is not provided.");
        return; // Early return if id is not provided
      }
      
      try {
        const res = await axios.get(`${USER_API_END_POINT}/otherUser/${id}`, {
          withCredentials: true,
        });
        
        console.log(res);
        
        if (res.data && res.data.otherUsers) {
          dispatch(getOtherUsers(res.data.otherUsers));
        } else {
          console.error("No other users found in the response.");
        }
      } catch (error) {
        console.error("Error fetching other users:", error);
        // Optional: handle error (e.g., dispatch error action or show notification)
      }
    };

    fetchOtherUsers();
  }, [dispatch, id]); // Added 'id' to the dependency array

};

export default useOtherUsers;
