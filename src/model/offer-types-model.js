export default class OfferTypesModel {
  #offerTypes = [];
  #serverDataApiService = null;

  constructor({ serverDataApiService }) {
    this.#serverDataApiService = serverDataApiService;
  }

  async init() {
    try {
      this.#offerTypes = await this.#serverDataApiService.getOfferTypes();
    } catch {
      throw new Error('Can\'t to load offer types data from server!');
    }
  }

  get offerTypes() {
    return this.#offerTypes;
  }
}
