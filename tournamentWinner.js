//   There's an algorithms tournament taking place in which teams of programmers

//   compete against each other to solve algorithmic problems as fast as possible.

//   Teams compete in a round robin, where each team faces off against all other

//   teams. Only two teams compete against each other at a time, and for each

//   competition, one team is designated the home team, while the other team is the

//   away team. In each competition there's always one winner and one loser; there

//   are no ties. A team receives 3 points if it wins and 0 points if it loses. The

//   winner of the tournament is the team that receives the most amount of points.

//   Given an array of pairs representing the teams that have competed against each

//   other and an array containing the results of each competition, write a

//   function that returns the winner of the tournament. The input arrays are named

//   competitions and results, respectively. The

//   competitions array has elements in the form of

//   [homeTeam, awayTeam], where each team is a string of at most 30

//   characters representing the name of the team. The results array

//   contains information about the winner of each corresponding competition in the

//   competitions array. Specifically, results[i] denotes

//   the winner of competitions[i], where a 1 in the

//   results array means that the home team in the corresponding

//   competition won and a 0 means that the away team won.

//   It's guaranteed that exactly one team will win the tournament and that each

//   team will compete against all other teams exactly once. It's also guaranteed

//   that the tournament will always have at least two teams.



// SAMPLE INPUT
// competitions = [
//   ["HTML", "C#"],
//   ["C#", "Python"],
//   ["Python", "HTML"],
// ]
// results = [0, 0, 1]

// SAMPLE OUTPUT
// "Python"
// C# beat HTML => C# has 3 points
// Python beat C# => Python has 3 points
// Python beat HTML => Python has 6 points

// given an array of pairs of teams and an array containing the result of each competition (pair)
// return the winner of the tournament

// competitions array is non-empty?
// results array is non-empty?
// the first team in a pair is always the homeTeam?
// the result array only records the points for the homeTeam? if homeTeam lost result for the round is 0? if homeTeam won result is 1?
// only one team wins? no ties in points?
// teams are strings?
// result for each round is a number? can only be 1 or 0? no ties?


// create a hashmap to store the number of points each team holds
// iterate through competitions list/array
// in each iteration, check to see if the result of the pair is 1 or 0
// if 0, increment the value in the hashmap for the second team by 3
// if 1, increment the value in the hashmap for the first team by 3
// iterate through the hashmap to get the team with the highest point
// return the team

function tournamentWinner (competitions, results) {
    const points = {};

    for (const competition of competitions) {
        for (const team of competition) {
            points[team] = 0;
        } 
    }

    for (let i = 0; i < competitions.length; i++) {
        if (results[i] === 1) {
            points[competitions[i][0]] += 3;
        } else {
            points[competitions[i][1]] += 3;
        }
    }

    let winningTeam = '';
    let highestPoints = 0;

    for (const team in points) {
        if (points[team] > highestPoints) {
            winningTeam = team;
            highestPoints = points[team];
        }
    }

    return winningTeam
}