class Pokemon {
    constructor(hp, attack, defense, ability){
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.ability = ability;
    }
}

class Trainer{
    constructor(name){
        this.name = name;
        this.pokemons = [];
    }
    add(pokemonObject){
        return this.pokemons.push(pokemonObject)
    }
    all(){
        return this.pokemons
    }
    get(name){
        return this.pokemons[name]
    }
}