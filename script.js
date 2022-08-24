const api_url = "http://api.open-notify.org/astros.json"
async function getDATA() {
    let id = 0
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)
    const {
        number,
        people,
        message,
    } = data;
    ast1 = people[0].name;
    ast1c = people[0].craft;
    ast2 = people[1].name;
    ast2c = people[1].craft;
    ast3 = people[2].name;
    ast3c = people[2].craft;
    ast4 = people[3].name;
    ast4c = people[3].craft;
    ast5 = people[4].name;
    ast5c = people[4].craft;
    ast6 = people[5].name;
    ast6c = people[5].craft;
    ast7 = people[6].name;
    ast7c = people[6].craft;
    ast8 = people[7].name;
    ast8c = people[7].craft;
    ast9 = people[8].name;
    ast9c = people[8].craft;
    ast10 = people[9].name;
    ast10c = people[9].craft;
    reTime = number - 1;
    for (let i = 0; i < number; i++) {
        console.log(people[id].name);
        id = id + 1;
    }
    document.getElementById('ast1').textContent = ast1;
    document.getElementById('ast1c').textContent = ast1c;
    document.getElementById('ast2').textContent = ast2;
    document.getElementById('ast2c').textContent = ast2c;
    document.getElementById('ast3').textContent = ast3;
    document.getElementById('ast3c').textContent = ast3c;
    document.getElementById('ast4').textContent = ast4;
    document.getElementById('ast4c').textContent = ast4c;
    document.getElementById('ast5').textContent = ast5;
    document.getElementById('ast5c').textContent = ast5c;
    document.getElementById('ast6').textContent = ast6;
    document.getElementById('ast6c').textContent = ast6c;
    document.getElementById('ast7').textContent = ast7;
    document.getElementById('ast7c').textContent = ast7c;
    document.getElementById('ast8').textContent = ast8;
    document.getElementById('ast8c').textContent = ast8c;
    document.getElementById('ast9').textContent = ast9;
    document.getElementById('ast9c').textContent = ast9c;
    document.getElementById('ast10').textContent = ast10;
    document.getElementById('ast10c').textContent = ast10c;
}
getDATA();

function theme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var elem = document.getElementById("themeBtn");
    if (elem.value == "☀️") elem.value = "🌙";
    else elem.value = "☀️";
}