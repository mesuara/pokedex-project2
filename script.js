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

let mess =  new Trainer ('mess');

//butterfree
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/12.json")
.then((response) => {


    let data = response.data

    let butterfree = new Pokemon(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name + ", " + data.abilities[1].ability.name
    )


mess.add(butterfree)
console.log(butterfree)
})


//victini
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/494.json")
.then((response) => {

  console.log(response.data)
    let data = response.data

    let victini = new Pokemon(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name
    )


mess.add(victini)
console.log(victini)
})

//mimikyu
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/778.json")
.then((response) => {


    let data = response.data

    let mimikyu = new Pokemon(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name + ", " + data.abilities[1].ability.name
    )


mess.add(mimikyu)
console.log(mimikyu)
})