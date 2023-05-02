import { doCORSRequest, reqType } from './baseRequest.js'

export const getLeague = async (id) => {
  const data = await doCORSRequest(`${reqType.leagueClassicStanding}${id}/standings/`);
  return data.league.name;
}



