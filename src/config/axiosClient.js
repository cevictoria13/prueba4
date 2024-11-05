import axios from 'axios'

const axiosClient = axios.create({
    baseURl: "https://github.com/cevictoria13/websancho.git"
})

export default axiosClient; 