export default class DestinationsModel {
  #destinations = [];
  #serverApiService = null;

  constructor({ serverApiService }) {
    this.#serverApiService = serverApiService;
  }

  async init() {
    try {
      this.#destinations = await this.#serverApiService.getDestinations();
    } catch {
      throw new Error('Can\'t to load destinations data from server!');
    }
  }

  get destinations() {
    return this.#destinations;
  }
}
