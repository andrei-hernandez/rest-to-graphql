import { F1 } from './data-source';

export class RacesData extends F1 {
  constructor() {
    super();
  }

  /*async getSeasons() {
    return await this.get('seasons.json?limit=80', {
      cacheOptions: { ttl: 60 }
    });
  }*/
}