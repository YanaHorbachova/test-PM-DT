import axios from "axios";
import {
  getСandidatesRequest,
  getСandidatesSuccess,
  getСandidatesError,
} from "./candidates-actions";

  const getСandidates = (photo) => async (dispatch) => {
    dispatch(getСandidatesRequest());

 
    try {
      const response = await axios.get(`http://135.181.30.244:27007/api/summaries/?photo=${photo}`);
  
      dispatch(getСandidatesSuccess(response.data));
    } catch (error) {
      dispatch(getСandidatesError(error.message));
    }
  };




export default getСandidates;