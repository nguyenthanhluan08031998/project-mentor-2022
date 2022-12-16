import axios from "axios";
import configAxios from './config'
 const Api = axios.create({
    baseURL: '',
    headers:{
        Accept:"application/json",
        'Content-Type': 'application/json'
    }
 })
 configAxios.setup(Api);
export default Api;