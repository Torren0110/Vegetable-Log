import apiClient from "./api-client";

class OrderService {
  constructor() {
    this.endpoint = "/orders";
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

export default new OrderService();
