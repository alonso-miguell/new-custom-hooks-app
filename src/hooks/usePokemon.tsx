import {useEffect, useState} from "react";
import {getPokemon, type Pokemon} from "../utils/pokeApi.tsx";

export const usePokemon= ( id: number ) => {

    const [pokemon, setPokemon] = useState<Pokemon>();



    useEffect(()=>{
        const getPokemonAsync= async () =>{
            setPokemon(await getPokemon(id));
        };

        getPokemonAsync();
    },[id])

    return pokemon;
}