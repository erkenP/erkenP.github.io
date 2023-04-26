let fplUrl = 'https://fantasy.premierleague.com/api/leagues-classic/623400/standings/';

document.getElementById("title1").innerHTML = "test";
fetchFpl();


async function fetchFpl() {
  const response = await fetch(fplUrl);
  const jsonData = await response.json();
  document.getElementById("title1").innerHTML = jsonData;
}


