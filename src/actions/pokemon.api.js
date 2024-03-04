const url = "https://pokeapi.co/api/v2"

export const getAllPokemon = async() =>{
    const response = await fetch(`${url}/pokemon?limit=151`)
    const data = await response.json();
    const promises = data.results.map(async(pokemon)=>{
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
    })
    const results = await Promise.all(promises)
    return results
}

export const getPokemonId = async(id) =>{
    const response = await fetch(`${url}/pokemon/${id}`)
    const data = await response.json()
    return data
}