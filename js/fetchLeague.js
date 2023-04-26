import { doCORSRequest, reqType } from './baseRequest.js';
const id = 623400;

const getLeague = () => {
  const data = doCORSRequest(`${reqType.leagueClassicStanding}${id}/standings/`);
  const test = JSON.parse(data);
  document.getElementById("title1").innerHTML = test.standings;
}

getLeague();
