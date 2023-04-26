import { doCORSRequest, reqType } from './baseRequest';
const id = 623400;

const getLeague = () => {
  const data = doCORSRequest(`${reqType.leagueClassicStanding}${id}/standings/`);
}

document.getElementById("title1").innerHTML = data;
