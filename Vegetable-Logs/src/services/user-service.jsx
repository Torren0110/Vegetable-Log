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

}

export default new UserService();