# Pokemon Fight Game in the Terminal

This is a simple terminal-playable Pokemon game with JavaScript basics. 
I completed the project by extending the original mission requirements to make it more interactive and fun.The game involves two players choosing a trainer each and taking turns to make moves to try to defeat each other's Pokemon. Players select their moves hitting key combinations, and the results are displayed on the screen.

## Installation

To use this game, you will need to have [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed on your machine. You can download and install both from their official websites.

## How-to:

1. Type node pokemon.js in the terminal to start a pokemon fight.
2. You will see two signs showing the Pokemon and their skills. Each player can choose one when asked. Just type the name into the terminal.

 ┌─────────┬──────────────┬───────────┬─────────┬──────┬───────┬──────────────────────┐
 │ (index) │ pokemonName  │ hitPoints │ defense │ mana │ level │        skills        │
 ├─────────┼──────────────┼───────────┼─────────┼──────┼───────┼──────────────────────┤
 │    0    │  'Pikachu'   │    35     │   40    │  80  │   1   │ [ [Skill], [Skill] ] │
 │    1    │ 'Bulbasaur'  │    45     │   49    │ 105  │   1   │ [ [Skill], [Skill] ] │
 │    2    │ 'Charmandar' │    39     │   43    │  75  │   1   │ [ [Skill], [Skill] ] │
 │    3    │  'Squirtle'  │    44     │   20    │  65  │   1   │ [ [Skill], [Skill] ] │
 │    4    │ 'Jigglypuff' │    115    │   20    │  65  │   1   │ [ [Skill], [Skill] ] │
 │    5    │ 'Bellsprout' │    50     │   35    │  90  │   1   │ [ [Skill], [Skill] ] │
 │    6    │   'Mewtwo'   │    106    │    5    │  50  │   1   │ [ [Skill], [Skill] ] │
 └─────────┴──────────────┴───────────┴─────────┴──────┴───────┴──────────────────────┘

┌─────────┬────────────────────────────────┬────────────────────────────────────┐
│ (index) │         skills                 |              skills                |      
├─────────┼────────────────────────────────┼────────────────────────────────────┤
│    0    │  'Static » DMG:50 | COST:30'   │ 'Lightning Rod » DMG:90 | COST:67' │
│    1    │ 'Overgrow » DMG:50 | COST:20'  │  'Chlorophyll » DMG:70 | COST:50'  │
│    2    │   'Blaze » DMG:30 | COST:10'   │  'Solar Power » DMG:60 | COST:40'  │
│    3    │  'Torrent » DMG:45 | COST:23'  │   'Rain Dash » DMG:78 | COST:46'   │
│    4    │ 'CuteCharm » DMG:60 | COST:80' │  'Competitive » DMG:30 | COST:10'  │
│    5    │ 'Gluttony » DMG:90 | COST:90'  │  'Chlorophyll » DMG:70 | COST:50'  │
│    6    │ 'Pressure » DMG:10 | COST:15'  │    'Unnerve » DMG:70 | COST:90'    │
└─────────┴────────────────────────────────┴────────────────────────────────────┘

3. When you've picked your pokemon, you'll see it's stats displayed.
4. When its your turn to attack, simply type in the attack you want to use.
5. Each Pokemon's attacks costs a certain amount of mana. If you run out of mana, you can't attack and will have to skip a turn  by typing skip. Skipping will replenish some of your mana. hint: this can also be a tactic to use a stronger attack in the next turn.
6. Each pokemon also has defense points. e.g. Jigglypuff's defense is 20. If its opponent has an attack of 45, Jigglypuff will only take 25 damage. If the attack strength is less than the defense points, no damage will be done.
7. First player to get the other to 0 or less health wins!!
8. At the end of the game, the Pikachu of the winning player's color declares the winner.

*******************
    *                    *
    *  *  * WINNER *  *  *
    *                    *
    ****************
         ___________      
        '._==_==_=_."-._ 
         .\\:      /    '.
         | (o)__(o)    |  
          \\   ..   /    
           '------\'  ` 



