import apiClient from "./api-client";

class CartService {
  constructor() {
    this.endpoint = "/carts";
  }

  get(uid) {
    const request = apiClient.get(this.endpoint, {
      params: {
        uid: uid,
      },
    });

    return request;
  }

	addToCart(uid, vid, quantity) {
		const request = apiClient.post(this.endpoint, {
			uid: uid,
			vid: vid,
			quantity: quantity
		})

		return request;
	}

}

export default new CartService;