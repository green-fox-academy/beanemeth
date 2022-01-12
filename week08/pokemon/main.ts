import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'grass', 'water');

function chooseEffective(pokemonOfAsh: Pokemon[], enemy: Pokemon): string{
    
    for (let index = 0; index < pokemonOfAsh.length; index++) {
        if (enemy.type === pokemonOfAsh[index].effectiveAgainst) {
            return pokemonOfAsh[index].name;
        }
    }
    return 'there is noone.' //if there is no right Pokemon, this is the return for the function
}

// Which pokemon should Ash use?

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Bulbasaur', 'grass', 'water'),
        new Pokemon('Pikachu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'grass'),
        new Pokemon('Pidgeot', 'flying', 'fighting'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

