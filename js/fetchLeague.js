import { doCORSRequest, reqType, test } from './baseRequest'

export const getLeague = (id) => {
  const data = doCORSRequest(`${reqType.leagueClassicStanding}${id}/standings/`);
  return data;
}

export const getTest = () => {
  return test();
}


