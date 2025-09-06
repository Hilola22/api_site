import axios from "axios";

export const api = axios.create({
    // baseURL: "http://localhost:3000",
    baseURL: import.meta.env.VITE_BASE_URL,
})

// api.interceptors.request.use((config)=>{
    
// })

// api.interceptors.response.use((config)=>{

// })