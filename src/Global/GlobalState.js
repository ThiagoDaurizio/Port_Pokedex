import { useEffect, useState } from "react"
import { getAllPokemons } from "../API/getAllPokemons"
import { BASE_URL } from "../Constants/BASE_URL"
import GlobalStateContext from "./GlobalStateContext"
import storeItems from "../Json/PokeBerries.json"


export const GlobalState = (props) => {
    const [pokemons, set_pokemons] = useState([])
    const [pokemonDetails, set_pokemonDetails] = useState([])

    const [url, set_url] = useState(`${BASE_URL}pokemon?limit=35&offset=0`)

    const [inCart, set_inCart] = useState([])
    const [totalPrice, set_totalPrice] = useState(0)
    const [watcher, set_watcher] = useState(0)

    const [onLoot, set_onLoot] = useState([])
    const [totalMoney, set_totalMoney] = useState(1000)

    useEffect(() => {
        if(onLoot.length === 0){
            set_onLoot(storeItems.berries.map((item) => {
                return {...item, amount: 0}
            }))
        }
    }, [])


    useEffect(() => {
        getAllPokemons(url, set_pokemons)
    }, [url])



    return(
        <GlobalStateContext.Provider value={{
            pokemons, set_pokemons,
            pokemonDetails, set_pokemonDetails,
            inCart, set_inCart,
            totalPrice, set_totalPrice,
            watcher, set_watcher,
            onLoot, set_onLoot,
            totalMoney, set_totalMoney,
            url, set_url
            }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}