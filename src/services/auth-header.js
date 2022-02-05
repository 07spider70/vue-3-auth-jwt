export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}

export function authX() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return user.accessToken ;
    } else {
        return {};
    }
}