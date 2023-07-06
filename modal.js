const modal = document.querySelector("#modal")
const pokemon = document.querySelector(".pokemons")

const convertPokemonToHtml = (pokemon) => {
  return `
    <section class="pokemon-details">
    <div class="header">
      <h1>Detalhe do pokémon</h1>
      <a href="#" onclick="closeModal()">Fechar</a>
    </div>
    <div id="back">
    <div class="info">
      <h1>${pokemon.name}</h1>
      <span>#${pokemon.number}</span>
    </div>
      <div class="details">
       <div class="typeDetails">
        ${pokemon.types
      .map((type) => `<h3 class="type ${type}">${type}</h3>`)
      .join("")}
        </div>
        <img id="img"
        src="${pokemon.photo}" 
        alt="${pokemon.name}">
      </div>
      </div>


      <div class="poke-details">
      <div class="about">


<div id="statsETitulo">
      <div id="status">
        <h1>Stats</h1>
      </div>

        <div class="stats">
          <h2>Hp</h2>
          <h4>${pokemon.stats["hp"]}</h4>
          <h2>Attack</h2>
          <h4>${pokemon.stats["attack"]}</h4>
          <h2>Defense</h2>
          <h4>${pokemon.stats["defense"]}</h4>
          <h2>Special Attack</h2>
          <h4>${pokemon.stats["special-attack"]}</h4>
          <h2>Special Defense</h2>
          <h4>${pokemon.stats["special-defense"]}</h4>
          <h2>Speed</h2>
          <h4>${pokemon.stats["speed"]}</h4>
        </div>

</div>

<div id="abilityEtitulo">
  <div id="ability">
        <h1>Abilities</h1>
  </div>
<div id="abi">
        <h2>${pokemon.abilities}</h2>
        </div>
</div>

    </div>
   </div>
  </section>`
}

function openModal(id) {
  modal.classList.remove("hide")
  pokeApi.getPokemonCardDetail(id).then((pokemon) => {
    const newHtml = convertPokemonToHtml(pokemon)
    modal.innerHTML = newHtml
  })
}

function closeModal() {
  modal.classList.add("hide")
}