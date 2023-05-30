export default class TypeOffersModel {
  #types = [];
  #typeOffersApiService = null;

  constructor({ typeOffersApiService }) {
    this.#typeOffersApiService = typeOffersApiService;
  }

  async init() {
    try {
      this.#types = await this.#typeOffersApiService.getTypes();
    } catch {
      throw new Error('Can\'t to load type offers data from server!');
    }
  }

  get types() {
    return this.#types;
  }
}
