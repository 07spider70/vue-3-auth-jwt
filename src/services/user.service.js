import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:3900/api/measures';
class UserService {
    getAllMeasures() {
        return axios.get(API_URL);
    }

}
export default new UserService();