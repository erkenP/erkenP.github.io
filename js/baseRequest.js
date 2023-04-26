const proxyURL = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'https://fantasy.premierleague.com/api/';

export const reqType = {
    bootstrap: 'bootstrap-static/', //Overview
    element: 'element-summary/', //Players (playderID)
    events: 'events', // Get all gameweeks
    event: 'event',  //A selected gameweek
    entry: 'entry', //Get a team
    elementTypes: 'element-types', // Get all player positions
    gameweekFixtures: 'fixtures/?event', //Get all fixtures for a specified gameweek (gameweek number)
    teams: 'teams/', //Get all teams,
    leagueClassicStanding: 'leagues-classic/' //Get league standing at current gameweek.
}

export const doCORSRequest = async (url) => {
    const response = await fetch(proxyURL + baseURL + url);
    const myJson = await response.json();
    return myJson
}

export const doCORSRequest2 = async (url) => {
    fetch(proxyURL + baseURL + url).then(response =>
        response.json().then(data => ({
            data: data,
            status: response.status
        })
        ).then(res => {
            console.log(res.status, res.data.title)
        }));
    return res.data
}
