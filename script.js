class Pokemon {
    constructor(name, hp, attack, defense, ability, image){
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.ability = ability;
        this.image = image;
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
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name + ", " + data.abilities[1].ability.name,
        data.sprites.front_default
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
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name,
        data.sprites.front_default
    )


mess.add(victini)
console.log(victini)
})

//mimikyu
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/778.json")
.then((response) => {
    console.log(response.data)

    let data = response.data

    let mimikyu = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name,
        data.sprites.front_default
    )
     

mess.add(mimikyu)
console.log(mimikyu)
})

console.log(mess)

let divImages = document.getElementById('mainImg')
let images = document.getElementById('img')

let btnNext = document.getElementById('btnPink')

let hP= document.getElementById('hp')
let pokeName = document.getElementById('name')
let attack = document.getElementById('attack')
let denfense = document.getElementById('defense')
let ability = document.getElementById('ability')


let i = 0;


btnNext.addEventListener('click', (change)=>{
   if(i<3){
//    images.src = nextItem();
   pokeName.innerText = mess.pokemons[i].name
   hp.innerText = "HP" + mess.pokemons[i].hp
   attack.innerText = "Atack" + mess.pokemons[i].attack
   denfense.innerText ="Defense" + mess.pokemons[i].defense
   ability.innerText = "Ability" + mess.pokemons[i].defense
    images.src = mess.pokemons[i].image
  
  i++;}
  else{
    pokeName.innerText = ''
    hp.innerText = ''
    attack.innerText = ''
    denfense.innerText =''
    ability.innerText = ''
     images.src = 'https://cdn.weasyl.com/static/media/ed/6d/7e/ed6d7e9d82c5e0be06441b9e427d8ffe4b056b0479d7f8975f671ebcd678ea97.png'
  }
})