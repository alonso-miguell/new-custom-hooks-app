export interface Pokemon {
    name: string,
    id: string,
    imageUrl: string,
}

export const getPokemon = async (pokeId: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    const data = await response.json();
    console.log(data);

    const {name, id} = data;
    const imageUrl = data.sprites.front_default;

    const pokemon: Pokemon = {
        name,
        id: id.toString().padStart(3, "0"),
        imageUrl,
    };

    console.log(pokemon);

    return pokemon;
}