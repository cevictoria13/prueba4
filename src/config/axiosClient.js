import axios from 'axios'

const axiosClient = axios.create({
    baseURl: "https://github.com/cevictoria13/prueba4.git"
})

export default axiosClient; 