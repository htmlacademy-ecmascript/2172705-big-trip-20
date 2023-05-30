import ApiService from '../framework/api-service.js';

export default class TypeOffersApiService extends ApiService {
  async getTypes() {
    const response = await this._load({ url: 'offers' });
    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }
}
