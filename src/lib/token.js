const jsonParse = (data) => {
    try {
        return JSON.parse(data);

    } catch (e) {
        console.log('error', e)
        return data;
    }
}

export const getAccessToken = () => {
    return jsonParse(window.localStorage.getItem('accessToken'));
}

export const setAccessToken = (token) => {
    return window.localStorage.setItem('accessToken', JSON.stringify(token));
}
export const removeAccessToken = (token) => {
    return window.localStorage.removeItem('accessToken', token);
}

export const getRefreshToken = () => {
    return jsonParse(window.localStorage.getItem('refreshToken'));
}

export const setRefreshToken = (token) => {
    return window.localStorage.setItem('refreshToken', JSON.stringify(token));
}
export const removeRefreshToken = (token) => {
    return window.localStorage.removeItem('refreshToken', token);
}

export const jwtDecode = (token) => {
    function parseJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };
}
