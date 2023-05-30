import ApiService from '../framework/api-service.js';

export default class DestinationsApiService extends ApiService {
  async getDestinations() {
    const response = await this._load({ url: 'destinations' });
    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }
}
