const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
    players.map((players,i) =>
    {
        let player={};
        player.name=players[i];
        player.strength = Math.ceil(Math.random() * 100);
        player.image = `images/super-${i + 1}.png`;
        player.type = i%2 == 0 ? "hero":"villain";
        detailedPlayers.push(Object.assign({}, player));

    });

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template

const buildPlayers = (players, type) => {
    let fragment = '';
    
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for(i=0;i<players.length;i++)
    {
    if(players[i].type==type){
    fragment += `<div class="player">
   <img src="${players[i].image}" alt="">
   <div class="name">${players[i].name}</div>
   <div class="strength">${players[i].strength}</div>
    </div>`
   }
   else
   {
      
      
        fragment += `<div class="player">
       <img src="${players[i].image}" alt="">
       <div class="name">${players[i].name}</div>
       <div class="strength">${players[i].strength}</div>
        </div>`
      
   }  
}

    return fragment;
};
// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}