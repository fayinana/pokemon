
const fetchPokemon = ()=>{

    for (let i = 1 ; i <= 150 ; i++ ){
const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
fetch(url)
.then(res => {
    return res.json();
})
.then(data => {
        const pokemon = {};
    
        pokemon['name'] = data.name;
        pokemon['id'] = data.id;
        pokemon['image'] = data.sprites['front_default'];
        pokemon['type'] = data.types.map((type)=>type.type.name).join(', ');
        console.log(pokemon);

const d = document.querySelector('.d');
const p = document.createElement("div");
const image = document.createElement('img');
image.src = `${pokemon['image']}`
const par = document.createElement('div');
par.innerHTML = `
<p class='one'>${pokemon['name']}</p>
<p class='two'>${pokemon['id']}</p>
<p class='three'>${ pokemon['type']}</p>
`


p.append(image)
p.append(par)
d.append(p); 
})
};
}

fetchPokemon();


