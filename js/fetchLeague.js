import { doCORSRequest2, reqType } from './baseRequest.js';
const id = 623400;

const getLeague = () => {
  const data = doCORSRequest2(`${reqType.leagueClassicStanding}${id}/standings/`);
  document.getElementById("title1").innerHTML = data.standings.results[2].entry;
}

getLeague();
