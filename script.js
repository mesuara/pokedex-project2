class Pokemon {
    constructor(name, hp, attack, defense, ability, image) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.ability = ability;
        this.image = image;
    }
}

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemons = [];
    }
    add(pokemonObj) {

        this.pokemons.push(pokemonObj)
    }
    all() {
        return this.pokemons
    }
    get(name) {
        for (let i = 0; i < this.all.length; i++) {
            if (name === this.pokemons[i].name) {
                return this.pokemons[i]
            }
        }
    }
}



let mess = new Trainer('mess');


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
    }).then(() => {
        let p1 = document.createElement('p')
        show.appendChild(p1)
        p1.innerText = 'BUTTERFREE'
        // p1.innerText = mess.all().map(x=>x.name).join();
        let ima = document.createElement('img')
        show.appendChild(ima)
        ima.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
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
    }).then(() => {
        let p2 = document.createElement('p')
        show.appendChild(p2)
        p2.innerText = "VICTINI"
        let imag = document.createElement('img')
        show.appendChild(imag)
        imag.src = mess.all().map(x => x.image).join();
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
    }).then(() => {
        show.innerText = mess.all().map(x => x.name.toUpperCase()).join();
        let im = document.createElement('img')
        im.src = mess.all().map(x => x.image).join();
        show.appendChild(im)
    })



console.log(mess)

let divImages = document.getElementById('mainImg')
let images = document.getElementById('img')

let btnStart = document.getElementById('btnStart')

let hP = document.getElementById('hp')
let pokeName = document.getElementById('name')
let attack = document.getElementById('attack')
let denfense = document.getElementById('defense')
let ability = document.getElementById('ability')


let i = 0;


btnStart.addEventListener('click', (change) => {
    if (i < 3) {
        //    images.src = nextItem();
        document.getElementById('pokemon').setAttribute('class', "animated 3s slideInLeft")
        pokeName.innerText = `${mess.pokemons[i].name.toUpperCase()}`
        
        hp.innerText = `HP ${mess.pokemons[i].hp}`
        
        attack.innerText = `Atack ${mess.pokemons[i].attack}`
   
        denfense.innerText = `Defense ${mess.pokemons[i].defense}`
       
        ability.innerText = `Ability ${mess.pokemons[i].ability}`
      
        images.src = mess.pokemons[i].image
        document.getElementById('mainImg').setAttribute('class', 'animated 2s zoomIn')
        btnStart.innerText = 'next'
        let prev = document.createElement('button')
        prev.innerText = 'prev'
        prev.setAttribute('id', 'prevBtn')
        btnStart.appendChild(prev)
        prev.addEventListener('click', ()=>{
            i = i-2;
        })
        i++;
        setTimeout(()=> {
            document.getElementById('pokemon').removeAttribute('class', "animated 3s slideInLeft" )
            document.getElementById('mainImg').removeAttribute('class', 'animated 2s zoomIn')
        },1000) 
    }
    else {
        pokeName.innerText = ''
        hp.innerText = ''
        attack.innerText = ''
        denfense.innerText = ''
        ability.innerText = ''
        images.src = 'https://cdn.weasyl.com/static/media/ed/6d/7e/ed6d7e9d82c5e0be06441b9e427d8ffe4b056b0479d7f8975f671ebcd678ea97.png'
        btnStart.innerText = 'GameOver'
        document.getElementById('mainImg').style.background = "url('http://bestanimations.com/Electronics/animated-tv-static-fuzz.gif')"
        document.getElementById('text').style.background = "url('http://bestanimations.com/Electronics/animated-tv-static-fuzz.gif')"
        let newBtn = document.createElement('button')
        newBtn.setAttribute('id', 'resetBtn')
        let text = document.createElement('p')
        text.innerText = 'Reset'
        newBtn.appendChild(text)
        btnStart.appendChild(newBtn)
        
        newBtn.addEventListener('click', (e)=>{
            window.location.reload()
        })
    }
   
    images.removeAttribute('class', 'anime')
    btnStart.removeAttribute('class', 'animated')
   
    
})

let show = document.getElementById('show')




