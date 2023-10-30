/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: "Rahul",
  team2: "Abhishek",
  players: [
    [
      "Rahul",
      "Rohit",
      "Gill",
      "Virat",
      "Kishan",
      "Hardik",
      "Jadeja",
      "Kuldeep",
      "Shami",
      "Bumrah",
      "Siraj"
    ],
    [
      "OM",
      "Kiran",
      "Hemant",
      "Akash",
      "Aditya",
      "Dileep",
      "Abhiskek",
      "Navneet",
      "Vishnu",
      "Praneet",
      "Ankit",
    ],
  ],
  score: "4:0",
  scored: ["Rohit", "Praneet", "Rohit", "Dileep"],
  date: "Oct 30th, 2023",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. spreading player array from given data
const [players1, players2] = game.players;

// 2. sepereate GoalKeaper  drom player list,1st one is the GoalKeaper

const [gk, ...fieldPlayers] = players1;

// 3.  create array of all the player
const allPlayers = [...players1, ...players2];

// 4. Final player list after adding substitute player

const players1Final = [...players1, "Rupesh", "Gundeep", "Samir"];

// 5. creating variable for team 1,team 2  with their odds and draw

const {
  odds: { team1, x: draw, team2 },
} = game;

// 6. printing the total scores of player
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

// 7. Player is more likely to win with low 

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 1 is more likely to win");