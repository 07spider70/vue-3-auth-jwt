import axios from 'axios';
import moment from "moment";
import authHeader, {authX} from "@/services/auth-header";
const API_URL = 'http://localhost:3900/api/devices/';
class UserService {

    getDeviceById(id) {
        return axios.get(API_URL+id, {
            headers: {
                'x-auth-token' : authX()
            }
        })
    }

    getAllDevices() {
        return axios.get(API_URL, {
            headers: {
                'x-auth-token' : authX()
            }
        })
    }


    formatDate (value) {
        if(value) {
            // console.log(value)
            return moment(value).format('DD.MM.YYYY HH:mm:ss')
        }
    }

}
export default new UserService();