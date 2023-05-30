import ApiService from '../framework/api-service.js';
import { HTTPMethod } from '../const.js';

export default class EventsApiService extends ApiService {
  async getEvents() {
    const response = await this._load({ url: 'points' });
    const parsedResponse = await ApiService.parseResponse(response);
    const adaptedEvents = parsedResponse.map(this.#adaptServerDataToClient);

    return adaptedEvents;
  }

  async updateEvent(event) {
    const response = await this._load({
      url: `points/${event.id}`,
      method: HTTPMethod.PUT,
      body: JSON.stringify(this.#adaptClientDataToServer(event)),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    const parsedResponse = await ApiService.parseResponse(response);
    const adaptedEvent = this.#adaptServerDataToClient(parsedResponse);

    return adaptedEvent;
  }

  #adaptServerDataToClient(event) {
    const adaptedEvent = {
      ...event,
      basePrice: event['base_price'],
      dateFrom: new Date(event['date_from']),
      dateTo: new Date(event['date_to']),
      isFavorite: event['is_favorite']
    };

    delete adaptedEvent['base_price'];
    delete adaptedEvent['date_from'];
    delete adaptedEvent['date_to'];
    delete adaptedEvent['is_favorite'];

    return adaptedEvent;
  }

  #adaptClientDataToServer(event) {
    const adaptedEvent = {
      ...event,
      'base_price': event['basePrice'],
      'date_from': event['dateFrom'].toISOString(),
      'date_to': event['dateTo'].toISOString(),
      'is_favorite': event['isFavorite']
    };

    delete adaptedEvent['basePrice'];
    delete adaptedEvent['dateFrom'];
    delete adaptedEvent['dateTo'];
    delete adaptedEvent['isFavorite'];

    return adaptedEvent;
  }
}
