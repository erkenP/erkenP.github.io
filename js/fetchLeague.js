import { doCORSRequest, reqType } from './baseRequest.js';
const id = 623400;

const getLeague = () => {
  const data = doCORSRequest(`${reqType.leagueClassicStanding}${id}/standings/`);
  return data;
}

export default getLeague;
