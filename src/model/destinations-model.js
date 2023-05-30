export default class DestinationsModel {
  #destinations = [];
  #destinationsApiService = null;

  constructor({ destinationsApiService }) {
    this.#destinationsApiService = destinationsApiService;
  }

  async init() {
    try {
      this.#destinations = await this.#destinationsApiService.getDestinations();
    } catch {
      throw new Error('Can\'t to load destinations data from server!');
    }
  }

  get destinations() {
    return this.#destinations;
  }
}
