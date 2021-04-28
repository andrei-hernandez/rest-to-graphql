import { checkRound, checkYear } from '../lib/utils';
import { F1 } from './data-source';

export class StandingsData extends F1 {
  constructor() {
    super();
  }

  async getStandings(year: string, round: number) {
    year = checkYear(year);
    round = checkRound(round);
    return await this.get(`${year}/driverStandings.json`, {
      cacheOptions: { ttl: 60 }
    });
  }
}