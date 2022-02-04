import axios from 'axios';
const API_URL = 'http://localhost:3900/api/';
class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'auth/user', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL + 'users', {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password,
            phoneNumber: user.phoneNumber
        });
    }
}
export default new AuthService();