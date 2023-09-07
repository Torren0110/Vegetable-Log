import apiClient from "./api-client";

class SalesService {
    constructor() {
        this.endpoint = "/sales";
    }

    get(uid) {
        const request = apiClient.get(this.endpoint, {
            params: {
                uid: uid,
            },
        });

        return request;
    }

}

export default new SalesService();