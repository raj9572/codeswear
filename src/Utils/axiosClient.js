import axios from 'axios'



export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    withCredentials: true
})


axiosClient.interceptors.request.use((request) => {
    console.log('request going',request)
    return request
}
)



axiosClient.interceptors.response.use((response) => {
    console.log('response coming',response)
    return response
})