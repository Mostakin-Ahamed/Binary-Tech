import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://travel-mania-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;