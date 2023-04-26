import { doCORSRequest, reqType } from './baseRequest';
const id = 623400;

const getLeague = () => {
  const data = doCORSRequest(`${reqType.leagueClassicStanding}${id}/standings/`);
  return data;
}

export default getLeague;
