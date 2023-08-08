import apiClient from "./api-client";

class VegerableService {
  constructor() {
    this.endpoint = "/vegetables";
  }

  getAll(searchString = "") {
    const request = apiClient.get(this.endpoint, {
      params: {
        search: searchString,
      },
    });

    return request;
  }

  get(id) {
    const request = apiClient.get(this.endpoint + `/${id}`);

    return request;
  }

  create(veg) {
    return apiClient.post(this.endpoint, veg);
  }
}

export default new VegerableService();
