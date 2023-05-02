import { getLeague } from './fetchLeague.js'


(async function () {
    const test = await getLeague(623400);
    console.log(test);
})();

