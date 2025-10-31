const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const fetchPokemon = async idOrName => {
  try {
    const response = await fetch(getPokemonUrl(idOrName.toLowerCase()))
    if (!response.ok) throw new Error('Pokémon não encontrado')
    const pokemon = await response.json()
    return [pokemon]
  } catch (error) {
    alert(error.message)
    return []
  }
}

const generatePokemonPromises = () =>
  Array.from({ length: 151 }, (_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json())
  )

const generateHTML = pokemons => {
  return pokemons.reduce((accumulator, { name, id, types }) => {
    const elementTypes = types.map(typeInfo => typeInfo.type.name)
    accumulator += `
      <li class="card ${elementTypes[0]}">
        <img class="card-image" alt="${name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" />
        <h2 class="card-title">${id}. ${name}</h2>
        <p class="card-subtitle">${elementTypes.join(" | ")}</p>
      </li>
    `
    return accumulator
  }, "")
}

const insertPokemonsIntoPage = pokemons => {
  const ul = document.querySelector('[data-js="pokedex"]')
  ul.innerHTML = generateHTML(pokemons)
}

const loadAllPokemons = async () => {
  const pokemonPromises = generatePokemonPromises()
  const pokemons = await Promise.all(pokemonPromises)
  insertPokemonsIntoPage(pokemons)
}

document.getElementById('searchButton').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim()
  if (query) {
    const result = await fetchPokemon(query)
    insertPokemonsIntoPage(result)
  }
})

document.getElementById('searchInput').addEventListener('keypress', async e => {
  if (e.key === 'Enter') {
    document.getElementById('searchButton').click()
  }
})

loadAllPokemons()
