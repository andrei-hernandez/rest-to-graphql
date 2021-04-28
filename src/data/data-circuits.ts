import { F1 } from './data-source';
export class CircuitsData extends F1 {
  constructor() {
    super();
  }

  async getHistoryCircuits(pageElements: number, page: number) {
    if (pageElements === -1) {
      return await this.get('circuits.json?limit=1000', {
        cacheOptions: { ttl: 60 }
      });
    }
    const offset = (page - 1) * pageElements;
    const limit = pageElements;
    const filter = `limit=${limit}&offset=${offset}`
    return await this.get(`circuits.json?${filter}`, {
      cacheOptions: { ttl: 60 }
    });
  }

  async getCircuitsById(id: string) {
    return await this.get(`circuits/${id}.json`, {
      cacheOptions: { ttl: 60 }
    })
  }
}