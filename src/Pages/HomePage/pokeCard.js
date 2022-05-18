import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllPokemons } from "../../API/getAllPokemons"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { StyledHomeCard, StyledHomeCardContent } from "./style"



export const Cardpoke = (props) => {
    const [pokeCard, set_pokeCard] = useState('')
    const {pokemonDetails, set_pokemonDetails} = useContext(GlobalStateContext)

    const navigate = useNavigate()

    useEffect(() => {
        getAllPokemons(props.poke.url, set_pokeCard)
    }, [props.poke])

    const goToDetails = () => {
        set_pokemonDetails(pokeCard)
        navigateDetails(pokeCard.name)
    }

    const navigateDetails = (name) => {
        navigate(`/details/${name}`)
    }

    const pokeType = pokeCard.types && pokeCard.types.map((type, index) => {
        if(index === 0){
            return (
                <div className="poke-type">
                <img  src={`/icons/${type.type.name}.svg`} alt={type.type.name}/>
                </div>
            )
        }
    })
    

    return(
        <StyledHomeCard>
            {pokeType}
        <StyledHomeCardContent name={pokeCard.name ? pokeCard.name : ""}>

            <div className="card-img">
                <img 
                    src={
                        pokeCard !== "" 
                        ? 
                        pokeCard.sprites.front_default 
                        : 
                        'https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif'} 
                        
                        alt={pokeCard.name}
                        
                        onClick={() => goToDetails()}
                        />
            </div>
        </StyledHomeCardContent>
        </StyledHomeCard>
    )
}