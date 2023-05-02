import { getLeague } from './fetchLeague.js'


(async function () {
    const liga = await getLeague(623400);
    for (let i = 0; i < 5; i++) {
        document.getElementById(`title${i}`).innerHTML = liga.standings.results[i].player_name;
    }
})();

