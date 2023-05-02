import { doCORSRequest, reqType } from './baseRequest.js'

export const getLeague = (id) => {
  const data = doCORSRequest(`${reqType.leagueClassicStanding}${id}/standings/`);
  return data;
}



