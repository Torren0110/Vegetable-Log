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

    update(cid, status) {
        const request = apiClient.patch(this.endpoint, {
            cid: cid,
            status: status
        })
        return request;
    }

}

export default new SalesService();