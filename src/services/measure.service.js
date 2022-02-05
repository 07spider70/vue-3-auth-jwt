import axios from 'axios';
import moment from "moment";
const API_URL = 'http://localhost:3900/api/measures/';
class UserService {
    getAllMeasures() {
        return axios.get(API_URL+"?limit=5");
    }

    getMeasureById(id) {
        return axios.get(API_URL+id)
    }

    getNumOfMeasures(num) {
        return axios.get(API_URL+"?limit="+num);
    }

    formatDate (value) {
        if(value) {
            // console.log(value)
            return moment(value).format('DD.MM.YYYY HH:mm:ss')
        }
    }

    iaqColorChange(value) {
        if (value < 50) {
            return 'green'
        } else if (value >= 50 && value <= 100) {
            return 'darkgreen'
        } else if (value > 100 && value <= 150) {
            return '#CCCC00'
        } else if (value > 150 && value <= 200) {
            return 'orange'
        } else if (value > 200 && value <= 250) {
            return 'red'
        } else if (value > 250 && value <= 350) {
            return 'purple'
        } else if (value > 350) {
            return 'brown'
        }
    }

}
export default new UserService();