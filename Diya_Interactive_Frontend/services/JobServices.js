import http from "../http-common";

const getAllJobs = () =>{
    return http.get("getallusers");
}


const JobServices = {
  getAllJobs,
};

export default JobServices;