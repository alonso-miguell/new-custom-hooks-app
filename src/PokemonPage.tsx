import {useCounter} from "./hooks/useCounter.tsx";
import {type Pokemon} from "./utils/pokeApi.tsx";
import {usePokemon} from "./hooks/usePokemon.tsx";

export const PokemonPage = () => {

    const{ counter, decreaseCounter, increaseCounter } = useCounter();
    const pokemon:Pokemon | undefined=usePokemon(counter);

    return (
        <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Pokémon</h1>
            <h3 className="text-xl font-bold text-white">#{pokemon?.id} {pokemon?.name}</h3>
            <img
                // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
                src={pokemon?.imageUrl}
                alt={`${pokemon?.name}`}
            />

            <div className="flex gap-2">

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={decreaseCounter}>
                    Anterior
                </button>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={increaseCounter}>
                    Siguiente
                </button>

            </div>
        </div>
    );
};