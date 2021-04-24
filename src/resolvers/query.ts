import { IResolvers } from "graphql-tools";

// Los resolvers de las operaciones de consulta para devolver información
const resolvers: IResolvers = {
  Query: {
    async seasonsList(_: void, __: any, { dataSources }) {
      return await dataSources.seasons.getSeasons().then(
        (data: any) => data.MRData.SeasonTable.Seasons
      );
    },
  }
};

export default resolvers;