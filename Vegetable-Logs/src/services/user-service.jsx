import apiClient from "./api-client";

class UserService {
    constructor() {
        this.endpoint = "/users";
    }

    register(newUser) {
        const request = apiClient.post(this.endpoint, newUser);

        return request;
    }

    logIn(userCredentials) {
        const request = apiClient.post(this.endpoint + "/login", userCredentials);

        return request;
    }

    update(uid, changes) {
        const request =apiClient.patch(this.endpoint, { ...changes, uid: uid })

        return request;
    }

    getInfo(uid) {
        const request = apiClient.post(this.endpoint + "/get", { uid : uid });
        return request;
    }

}

export default new UserService();

export function saveToken(tokenData){
    tokenData.expireDate = new Date(new Date().getTime() + (12*60*60*1000));
    localStorage.setItem('userDetails', JSON.stringify(tokenData))
}

export function checkToken(){
    const TokenDetails = localStorage.getItem('userDetails')

    if(!TokenDetails){
        return ''
    }
    const Token = JSON.parse(TokenDetails)
    let expire= new Date(Token.expireDate)
    let today = new Date()
    if(today > expire){
        return ''
    }
    return Token.uid
}

export function clearToken(){
    localStorage.removeItem('userDetails')
}