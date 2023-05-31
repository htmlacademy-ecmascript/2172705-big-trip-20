export default class OfferTypesModel {
  #offerTypes = [];
  #serverApiService = null;

  constructor({ serverApiService }) {
    this.#serverApiService = serverApiService;
  }

  async init() {
    try {
      this.#offerTypes = await this.#serverApiService.getOfferTypes();
    } catch {
      throw new Error('Can\'t to load offer types data from server!');
    }
  }

  get offerTypes() {
    return this.#offerTypes;
  }
}
