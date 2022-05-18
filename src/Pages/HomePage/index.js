import { useContext, useEffect, useState } from "react"
import { getAllPokemons } from "../../API/getAllPokemons"
import { searchByPokemon } from "../../API/searchByPokemon"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { GhostHeader } from "../../Styles/GhostHeaderDiv"
import { Cardpoke } from "./pokeCard"
import { Cardsearch } from "./searchCard"
import { StyledHome, StyledHomeSearch, StyledHomeButtons } from "./style"




export const PageHome = () => {
    const {pokemons, set_pokemons, url, set_url} = useContext(GlobalStateContext)
    const [searchMenu, set_searchMenu] = useState("menu-closed")
    const [searchInput, set_searchInput] = useState("")
    const [searchedPokemon, set_searchedPokemon] = useState([])
    const [searchResult, set_searchResult] = useState(false)

    const pokeList = pokemons.results && pokemons.results.map((poke) => {
        return(
            <Cardpoke key={poke.name} poke={poke}/>
        )
    })



    const menuToggle = (command) => {
        if(command === "open"){
            set_searchMenu("menu-opened")
        }

        if(command === "close"){
            set_searchMenu("menu-closed")
        }
    }

    const chancePageItens = (command) => {
        if(command === "next" && pokemons.next !== null){
            set_url(pokemons.next)
            window.scrollY(100)
        }

        if(command === "back" && pokemons.previous !== null){
            set_url(pokemons.previous)
            window.scrollY(100)
        }
    }

    const tryToSearchPokemon = (event) => {
        event.preventDefault()
        if(searchInput !== ""){
            searchByPokemon(`https://pokeapi.co/api/v2/pokemon/${searchInput}`, set_searchedPokemon, set_searchResult)

            set_searchInput("")
        }
    }


    return(
        <div>
            <GhostHeader />

        <StyledHomeSearch>
            {searchMenu === "menu-closed" ?
                <input 
                    placeholder={'Search pokemon'} 
                    onClick={() => menuToggle("open")}
                    value={searchInput}
                />
                :
                <div></div>
            }
            {searchMenu === "menu-opened" ?
                <label className="home-menu">
                    <form onSubmit={tryToSearchPokemon}>
                        <input 
                            placeholder={'Pokemon name'}
                            value={searchInput}
                            onChange={(event) => set_searchInput(event.target.value.toLowerCase())}
                            required
                            />
                        <button type={'submit'}>Search</button>
                    </form>
                    {searchResult ? 
                        <Cardsearch search={searchedPokemon}/>
                        : 
                        <img 
                            src={'https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif'} 
                            
                            alt="not has pokemon"
                        />
                    }
                    <button className="button-close" onClick={() => menuToggle("close")}>Close</button>
                </label>
                :
                <div></div>
            }
        </StyledHomeSearch>


        <StyledHomeButtons>
        {
            pokemons.previous !== null ?
            <button onClick={() => chancePageItens("back")}><ion-icon name="arrow-undo-outline"/></button>
            :
            <p>NEXT</p>
        }

        {
            pokemons.next !== null ?
            <button onClick={() => chancePageItens("next")}><ion-icon name="arrow-redo-outline"/></button>
            :
            <p>BACK</p>
        }
        </StyledHomeButtons>

            <StyledHome>
                {pokeList}
            </StyledHome>

        <StyledHomeButtons>
            {
                pokemons.previous !== null ?
                <button onClick={() => chancePageItens("back")}><ion-icon name="arrow-undo-outline"/></button>
                :
                <p>NEXT</p>
            }

            {
                pokemons.next !== null ?
                <button onClick={() => chancePageItens("next")}><ion-icon name="arrow-redo-outline"/></button>
                :
                <p>BACK</p>
            }
        </StyledHomeButtons>
        </div>
    )
}