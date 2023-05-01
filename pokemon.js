const readlineSync = require("readline-sync");
const colors = require("colors");

//>>>>> CLASS <<<<<//
class Arena {
  constructor() {
    this.pokemons = [];
    this.bluePokemon = [];
    this.greenPokemon = [];
  }
  addPokemon(...pokemonName) {
    this.pokemons.push(...pokemonName);
    return this.pokemons;
  }
  // complete list of pokemon //
  displayPokemons() {
    return this.pokemons
  }
  // lets blue player pick their pokemon //
  pickPokemonBlue(name) {
    let check = this.pokemons.find(
      (pickedName) =>
        pickedName.pokemonName.toLowerCase() === name.toLowerCase()
    );
    if (check === undefined) {
      return;
    } else {
      this.bluePokemon = check;
      console.log(this.bluePokemon);
      return `${check.pokemonName} has entered the Arena`;
    }
  }
  // lets green player pick their pokemon //
  pickPokemonGreen(name) {
    let check = this.pokemons.find(
      (pickedName) =>
        pickedName.pokemonName.toLowerCase() === name.toLowerCase()
    );
    if (check === undefined) {
      return;
    } else {
      this.greenPokemon = check;
      console.log(this.greenPokemon);
      return `${check.pokemonName} has entered the Arena`;
    }
  }
  // status of blue pokemon //
  showStatusBlue() {
    return `${this.bluePokemon.pokemonName} has ${this.bluePokemon.hitPoints} hit points, ${this.bluePokemon.mana} mana points left`;
  }
  // and currently has a damage multiplier of ${this.bluePokemon.level}x`; 
  // status of blue pokemon //
  showStatusGreen() {
    return `${this.greenPokemon.pokemonName} has ${this.greenPokemon.hitPoints} hit points, ${this.greenPokemon.mana} mana points left`;
  }
  // and currently has a damage multiplier of ${this.greenPokemon.level}x`; 
  

  //blue attack sequence //
  blueAttackTurn(skill) {
    let check = this.bluePokemon.skills.find(
      (pickedSkill) =>
        pickedSkill.skillName.toLowerCase() === skill.toLowerCase()
    );
    this.bluePokemon.mana -= check.manaCost;
    let damageVsDefense = check.damage - this.greenPokemon.defense;
    if (damageVsDefense > 0) {
      this.greenPokemon.hitPoints -= damageVsDefense;
      return `${this.bluePokemon.pokemonName} did ${damageVsDefense} damage to ${this.greenPokemon.pokemonName}`;
    } else {
      return `${this.greenPokemon.pokemonName} deflected ${this.bluePokemon.pokemonName}'s attack`;
    }
  }
  //green attack sequence //
  greenAttackTurn(skill) {
    let check = this.greenPokemon.skills.find(
      (pickedSkill) =>
        pickedSkill.skillName.toLowerCase() === skill.toLowerCase()
    );
    this.greenPokemon.mana -= check.manaCost;
    let damageVsDefense = check.damage - this.bluePokemon.defense;
    if (damageVsDefense > 0) {
      this.bluePokemon.hitPoints -= damageVsDefense;
      return `${this.greenPokemon.pokemonName} did ${damageVsDefense} damage to ${this.bluePokemon.pokemonName}`;
    } else {
      return `${this.bluePokemon.pokemonName} deflected ${this.greenPokemon.pokemonName}'s attack`;
    }
  }
}

//>>>>> POKEMON CONSTRUCTOR <<<<<//
class Pokemon {
  constructor(pokemonName, hitPoints, defense, mana, level) {
    this.pokemonName = pokemonName;
    this.hitPoints = hitPoints;
    this.defense = defense;
    this.mana = mana;
    this.level = level;
    this.skills = [];
  }
  reduceStats() {
    this.hitPoints -= 10;
  }
  addSkill(skill) {
    this.skills.push(skill);
  }
}

//>>>>> SKILL CONSTRUCTOR <<<<<//
class Skill {
  constructor(skillName, damage, manaCost) {
    this.skillName = skillName;
    this.damage = damage;
    this.manaCost = manaCost;
  }
}

//>>>>> POKEMON CREATION <<<<<//
let pikachu = new Pokemon("Pikachu", 35, 40, 80, 1);
let bulbasaur = new Pokemon("Bulbasaur", 45, 49, 105, 1);
let charmandar = new Pokemon("Charmandar", 39, 43, 75, 1);
let squirtle = new Pokemon("Squirtle", 44, 20, 65, 1);
let jigglyPuff = new Pokemon("Jigglypuff", 115, 20, 65, 1);
let bellSprout = new Pokemon("Bellsprout", 50, 35, 90, 1);
let mewTwo = new Pokemon("Mewtwo", 106, 5, 50, 1);

//>>>>>> SKILL CREATION AND ASSIGNMENT <<<<<//
// pikachu //
let static = new Skill("Static", 50, 30);
let lightningRod = new Skill("Lightning Rod", 90, 67);
pikachu.addSkill(static);
pikachu.addSkill(lightningRod);

// bulbasaur //
let overGrow = new Skill("Overgrow", 50, 20);
let chlorophyll = new Skill("Chlorophyll", 70, 50);
bulbasaur.addSkill(overGrow);
bulbasaur.addSkill(chlorophyll);

// charmandar //
let blaze = new Skill("Blaze", 30, 10);
let solarPower = new Skill("Solar Power", 60, 40);
charmandar.addSkill(blaze);
charmandar.addSkill(solarPower);

// squirtle //
let torrent = new Skill("Torrent", 45, 23);
let rainDash = new Skill("Rain Dash", 78, 46);
squirtle.addSkill(torrent);
squirtle.addSkill(rainDash);

// jigglypuff //
let cuteCharm = new Skill("CuteCharm", 60, 80);
let competitive = new Skill("Competitive", 30, 10);
jigglyPuff.addSkill(cuteCharm);
jigglyPuff.addSkill(competitive);

//bellsprout //
let gluttony = new Skill("Gluttony", 90, 90);
bellSprout.addSkill(gluttony);
bellSprout.addSkill(chlorophyll);

// mewtwo //
let pressure = new Skill("Pressure", 10, 15);
let unnerve = new Skill("Unnerve", 70, 90);
mewTwo.addSkill(pressure);
mewTwo.addSkill(unnerve);

// >>>>> CREATE ARENA <<<<<//
let arena = new Arena();
arena.addPokemon(
  pikachu,
  bulbasaur,
  charmandar,
  squirtle,
  jigglyPuff,
  bellSprout,
  mewTwo
);

//>>>>> GAME FUNCTIONS <<<<<//
let roundCounter = 0;
let attackBlue = "";
let attackGreen = "";

// blue attack //
function attackCheckBlue() {
  let check = arena.bluePokemon.skills.find(
    (pickedSkill) =>
      pickedSkill.skillName.toLowerCase() === attackBlue.toLowerCase()
  );
  if (attackBlue.toLowerCase() === "skip") {
    arena.bluePokemon.mana += 30;
    console.log(`skipping attack & increasing mana by 30`.blue);
  } else if (attackBlue.toLowerCase() === "check") {
    console.log(arena.bluePokemon);
    console.log(
      " –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––"
        .red
    );
    attackBlue = readlineSync.question("Blue Player: Pick your attack: ".blue);
    attackCheckBlue();
  } else if (
    !(
      arena.bluePokemon.skills[0].skillName.toLowerCase() ===
        attackBlue.toLowerCase() ||
      arena.bluePokemon.skills[1].skillName.toLowerCase() ===
        attackBlue.toLowerCase()
    )
  ) {
    attackBlue = readlineSync.question(
      "Blue Player: Your Pokemon doesn't know that skill, pick your attack: "
        .blue
    );
    attackCheckBlue();
  } else if (arena.bluePokemon.mana < check.manaCost) {
    attackBlue = readlineSync.question(
      "Blue Player: Not enough Mana, pick another attack skill or skip to recover mana: "
        .blue
    );
    attackCheckBlue();
  } else {
    console.log(colors.blue(arena.blueAttackTurn(attackBlue)));
  }
};

// green attack //
function attackCheckGreen() {
  let check = arena.greenPokemon.skills.find(
    (pickedSkill) =>
      pickedSkill.skillName.toLowerCase() === attackGreen.toLowerCase()
  );
  if (attackGreen.toLowerCase() === "skip") {
    arena.greenPokemon.mana += 30;
    console.log(`skipping attack & increasing mana by 30`.green);
  } else if (attackGreen.toLowerCase() === "check") {
    console.log(arena.greenPokemon);
    console.log(
      " –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––"
        .red
    );
    attackGreen = readlineSync.question("Green Player: Pick your attack: ".green);
    attackCheckGreen();
  } else if (
    !(
      arena.greenPokemon.skills[0].skillName.toLowerCase() ===
        attackGreen.toLowerCase() ||
      arena.greenPokemon.skills[1].skillName.toLowerCase() ===
        attackGreen.toLowerCase()
    )
  ) {
    attackGreen = readlineSync.question(
      "Green Player: Your Pokemon doesn't know that skill, pick your attack: "
        .green
    );
    attackCheckGreen();
  } else if (arena.greenPokemon.mana < check.manaCost) {
    attackGreen = readlineSync.question(
      "Green Player: Not enough Mana, pick your attack: ".green
    );
    attackCheckGreen();
  } else {
    console.log(colors.green(arena.greenAttackTurn(attackGreen)));
  }
};

//>>>>> MAIN FIGHT FUNCTION <<<<<//
// runs main flow of alternating attack sequences //
function fight() {
  roundCounter += 1;
  console.log(colors.bgYellow(`Round ${roundCounter} - FIGHT!`));
  console.log();

  // Blue turn
  attackBlue = readlineSync.question("Blue Player: Pick your attack: ".blue);
  attackCheckBlue();
  console.log(
    " –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––"
      .red
  );
  if (arena.greenPokemon.hitPoints <= 0 || arena.bluePokemon.hitPoints <= 0) {
    master();
  } else {
    //Green Turn
    attackGreen = readlineSync.question("Green Player: Pick your attack: ".green);
    attackCheckGreen();
  console.log();
  }
  console.log(
    " –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––"
      .red)
  console.log(colors.blue(arena.showStatusBlue()));
  console.log(colors.green(arena.showStatusGreen()));
  console.log();
  master();
};

//>>>>> MASTER FUNCTION <<<<< //

function master() {
  if (arena.bluePokemon.hitPoints <= 0) {
    console.log(
      colors.bold.bgGreen.black(
        `${arena.greenPokemon.pokemonName} has defeated ${arena.bluePokemon.pokemonName} - Green Player Wins!`
      )
    );
    console.log(`                                   
    **********************
    *                    *
    *  *  * WINNER *  *  *
    *                    *
    **********************
         ___________      
        '._==_==_=_."-._ 
         .\\:      /    '.
         | (o)__(o)    |  
          \\   ..   /    
           '------\'    `.green);
  } else if (arena.greenPokemon.hitPoints <= 0) {
    console.log(
      colors.bold.bgBlue.black(
        `${arena.bluePokemon.pokemonName} has defeated ${arena.greenPokemon.pokemonName} - Blue Player Wins!`
      )
    );
    console.log(`
    **********************
    *                    *
    *  *  * WINNER *  *  *
    *                    *
    **********************
         ___________      
        '._==_==_=_."-._ 
         .\\:      /    '.
         | (o)__(o)    |  
          \\   ..   /    
           '------\'    `.blue);
  } else {
    return fight();
  }
};

//<<<<< CHECK POKEMON PICKS >>>>>//
// blue //
function pokemonCheckBlue() {
  let check = arena.pokemons.find(
    (pickedPokemon) =>
      pickedPokemon.pokemonName?.toLowerCase() === pickPokemonBlue?.toLowerCase()
  );
  if (check === undefined) {
    pickPokemonBlue = readlineSync.question(
      "Blue Player: Pokemon doesn't exist. Pick your Pokemon: ".blue
    );
    pokemonCheckBlue();
  } else {
    console.log(arena.pickPokemonBlue(pickPokemonBlue).blue);
  }
};
// green //
function pokemonCheckGreen() {
  let check = arena.pokemons.find(
    (pickedPokemon) =>
      pickedPokemon.pokemonName?.toLowerCase() === pickPokemonGreen?.toLowerCase()
  );
  if (check === undefined) {
    pickPokemonGreen = readlineSync.question(
      "Green Player: Pokemon doesn't exist. Pick your Pokemon: ".green
    );
    pokemonCheckGreen();
  } else {
    console.log(arena.pickPokemonGreen(pickPokemonGreen).green);
  }
};

//////GAME START SEQUENCE//////
console.log()
console.log()
console.log(
  "   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<–––––––––––––––>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    .red
);
console.log()
console.log()
console.log(
  colors.red(
    "Players, decide which pokemon you want:"
  )
);
console.log()

console.table(arena.displayPokemons());
// console.table(arena.displayPokemons().map(pokemon => pokemon.skills.map(skill => skill.skillName)));
console.log();

console.log(
  colors.red(
    "Players, choose your attack from this table:"
  )
);
console.log();
console.table(arena.displayPokemons().map(pokemon => pokemon.skills.map(skill => `${skill.skillName} » DMG:${skill.damage} | COST:${skill.manaCost}`)));
    // arena.displayPokemons().map(pokemon => console.table({pokemon}));
    console.log();
console.log(
  "   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<–––––––––––––––>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    .red
);
console.log();

let pickPokemonBlue = readlineSync.question( 
  `Blue Player: Pick your Pokemon: `.blue);
pokemonCheckBlue();
console.log();
console.log(
  " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<–––––––>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    .red
);
console.log();
let pickPokemonGreen = readlineSync.question("Green Player: Pick your Pokemon: ".green);
pokemonCheckGreen();
console.log();
console.log(
  " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<–––––––>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    .red
);
console.log();
console.log(colors.blue(arena.showStatusBlue()));
console.log(colors.green(arena.showStatusGreen()));
console.log();


fight();



