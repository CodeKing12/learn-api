import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://plugin.sc2.zone",
})