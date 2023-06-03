export default class DestinationsModel {
  #destinations = [];
  #serverDataApiService = null;

  constructor({ serverDataApiService }) {
    this.#serverDataApiService = serverDataApiService;
  }

  async init() {
    try {
      this.#destinations = await this.#serverDataApiService.getDestinations();
    } catch {
      throw new Error('Can\'t load destinations data from server!');
    }
  }

  get destinations() {
    return this.#destinations;
  }
}
