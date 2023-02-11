import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

 function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    })
    .then((response) => {
        
            localStorage.setItem("user", JSON.stringify({"user":response}))
        
        return {"user":response};
    })
}

 function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    })
    .then((response) => {
        console.log("*************", response);
        if(response.userToken) {
            localStorage.setItem("user", JSON.stringify(response))
        }
        return response;
    })
}

 function verify(verify_url) {
    return request({
        url: API_BASE_URL + "/auth/"+verify_url,
        method: 'GET',
        body: JSON.stringify()
    });
}

 function signup(signupRequest) {
    console.log("################", signupRequest)
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    }).then((response) => {
        console.log("*************", response);
        if(response.userToken) {
            localStorage.setItem("user", JSON.stringify(response));
            // return {"data" : "sucess !"}
            return response;
        }
    })
}

export default {
    signup,
    verify,
    login,
    getCurrentUser,
};