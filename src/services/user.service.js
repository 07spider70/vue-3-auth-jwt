import axios from 'axios';
const API_URL = 'http://localhost:3900/api/measures/';
class UserService {
    getAllMeasures() {
        return axios.get(API_URL+"?limit=20");
    }

    getUserBoard() {
        return axios.get(API_URL);
    }

}
export default new UserService();