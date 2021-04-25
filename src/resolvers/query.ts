import { IResolvers } from "graphql-tools";

// Los resolvers de las operaciones de consulta para devolver información
const resolvers: IResolvers = {
  Query: {
    async seasonsList(_: void, __: any, { dataSources }) {
      return await dataSources.seasons.getSeasons().then(
        (data: any) => data.MRData.SeasonTable.Seasons
      );
    },
    async racesByYear(_: void, { year }, { dataSources }) {
      return await dataSources.races.getYear(year).then(
        (data: any) => data.MRData.RaceTable.Races
      );
    },
    async raceSelect(_: void, { year, round }, { dataSources }) {
      return await dataSources.races.getYearRound(year, round).then(
        (data: any) => data.MRData.RaceTable.Races[0]
      );
    },
    async historyDrivers(_: void, __: any, { dataSources }) {
      return await dataSources.drivers.getDrivers().then(
        (data: any) => data.MRData.DriverTable.Drivers
      )
    },
    async driversSelect(_: void, { id }, { dataSources }) {
      return await dataSources.drivers.getDriversById(id).then(
        (data: any) => data.MRData.DriverTable.Drivers[0]
      )
    }
  }
};

export default resolvers;