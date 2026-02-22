import {useEffect, useState} from "react";
import {getPokemon, type Pokemon} from "../../utils/pokeApi.tsx";

export const usePokemon= ( id: number ) => {

    const [pokemon, setPokemon] = useState<Pokemon>();

    /**
     * ¿Por qué no se puede declarar la función callback de un useEffect directamente como async?
     *
     *
     * Porque useEffect espera que el callback retorne opcionalmente una función de limpieza,
     * pero una función async siempre retorna una Promesa, rompiendo así el contrato del hook.
     *
     *
     * Una función declarada como async envuelve implícitamente su retorno en una Promesa.
     * useEffect, sin embargo, requiere que el valor de retorno sea una función (para la limpieza) o undefined.
     * Al retornar una Promesa, se viola esta regla. La forma correcta es definir una función async dentro del
     * efecto y llamarla.
     */


    useEffect(()=>{
        const getPokemonAsync= async () =>{
            setPokemon(await getPokemon(id));
        };

        getPokemonAsync();
    },[id])

    return pokemon;
}