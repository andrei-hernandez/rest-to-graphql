import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from "../lib/utils";

// Los resolvers de las operaciones de consulta para devolver información
const type: IResolvers = {
  Season: {
    year: parent => parent.season,
    urlMobile: parent => getWikipediaMobileUrl(parent.url)
  },
  Race: {
    name: parent => parent.raceName,
    circuit: parent => parent.Circuit,
    urlMobile: parent => getWikipediaMobileUrl(parent.url)

  },
  Circuit: {
    id: parent => parent.circuitId,
    name: parent => parent.circuitName,
    location: parent => parent.Location,
    urlMobile: parent => getWikipediaMobileUrl(parent.url)
  },
  Location: {
    lng: parent => parent.long
  }
}

export default type;