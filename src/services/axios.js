import axios from "axios"

const api = axios.create({
    baseURL: "https://develop.pvrcino.codes/api/",
    timeout: 4000,
});

export default api;