let fplUrl = 'https://fantasy.premierleague.com/api/leagues-classic/623400/standings/';

document.getElementById("title1").innerHTML = "test4";
fetchFpl();



async function fetchFpl() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://fantasy.premierleague.com/api/leagues-classic/623400/standings", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


