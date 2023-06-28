# Rock-Paper-Scissors
This repository contains a simple implementation of the classic game "Rock-Paper-Scissors" part #1 in JavaScript. The game allows two players to compete against the computer in a series of rounds, choosing between rock, paper, or scissors to determine the winner.
# Plans
- Player vs. Computer mode: A single player can play against the computer AI, which makes its choices based on a set of predefined rules.
- Interactive gameplay: The game provides a user-friendly interface that prompts players for their choices and displays the results of each round.
- Score tracking: The game keeps track of the scores for both players throughout the game, displaying them after each round.
- Win condition: The game determines the winner based on a predefined set of rules for rock-paper-scissors matchups.
# Algorithm
1. Initialize the game by setting the scores for both players to zero.
2. Prompt the players for their choices (rock, paper, or scissors) for each round.
3. Compare the choices to determine the winner according to the rules of Rock-Paper-Scissors:

- Rock beats scissors.
- Scissors beat paper.
- Paper beats rock.
- If both players choose the same option, it's a tie.
- Update the scores based on the outcome of each round:

4. If a player wins, increment their score by 1.
5. If it's a tie, scores remain unchanged.
6. Display the choices made by each player and the outcome of the round (win, lose, or tie).
7. Repeat steps 2-5 for the desired number of rounds.

At the end of the game, display the final scores for both players.
