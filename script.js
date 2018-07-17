class Pokemon {
    constructor(hp, attack, defense, ability){
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.ability = ability;
        this.id = id;
    }
}

class Trainer{
    constructor(name){
        this.name = name;
        this.pokemons = [];
    }
    add(pokemonObj){

        this.pokemons.push(pokemonObj)
    }
    all(){
        return this.pokemons
    }
    get(name){
        for (let i = 0; i < this.all.length; i++){
            if (name === this.all[i].name) {
                return this.all[i]
    }
}
    }
}
 
// axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/12.json").then((response) => {
//     console.log(response.data)
//   })
  
  
//   .catch(function (error) {
//     // handle error
//     alert('HEY THIS API ISNT WORKING')
//   })

// let id = [12, 494, 778]


// id.forEach((id)=> {
//     axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/"+ id +".json").then((response) => {
//     console.log(response.data)
    
//   })
  
  
//   .catch(function (error) {
//     // handle error
//     alert('HEY THIS API ISNT WORKING')
//   })
// })