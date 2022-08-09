import axiosClient from "./axiosClient";


const cityApi= {
    getAll(params){
        const url ='/cities';
        return axiosClient.get(url,params);
    }
}

export default cityApi;