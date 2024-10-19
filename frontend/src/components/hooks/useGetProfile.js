// import axios from "axios";
// import { USER_API_END_POINT } from "../../utils/constant";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getMyProfile } from "../../redux/userSlice";

// const useGetProfile = (id) => {
// const dispatch = useDispatch()
//   useEffect(()=>{
//     const fetchMyProfile = async() =>{
//       try {
//         const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`,{
//           withCredentials : true
//         });
//         console.log(res);
//         dispatch(getMyProfile(res.data.user));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchMyProfile()
   
//   },[id])
  
// };

// export default useGetProfile;



import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../../redux/userSlice";

const useGetProfile = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
          withCredentials: true,
        });
        console.log(res);
        if (res.data && res.data.user) {
          dispatch(getMyProfile(res.data.user));
        } else {
          console.error("User data not found in response.");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        // Optional: handle error (e.g., dispatch error action or show notification)
      }
    };

    if (id) {
      fetchMyProfile();
    }
  }, [dispatch, id]); // Included 'dispatch' in dependency array for best practices
};

export default useGetProfile;
