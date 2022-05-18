import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getAllPokemons } from "../../API/getAllPokemons"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { GhostHeader } from "../../Styles/GhostHeaderDiv"
import { firstLetterUpper } from "../../Utilities/firstLetterUpper"
import { pokeTypeIcon } from "../../Utilities/pokeTypeIcon"
import { StyledDetails, StatBar } from "./style"



export const PageDetails = ( ) => {
    const {pokemonDetails, set_pokemonDetails} = useContext(GlobalStateContext)

    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`
    
    useEffect(() => {
        getAllPokemons(url, set_pokemonDetails)
    }, [])


    return(
        <div>
            <GhostHeader />

            <StyledDetails>
                <div className="detail-basic">
                    <div className="details-basic-img">
                            <img className="details-basic-img1" src={pokemonDetails.sprites && pokemonDetails.sprites.front_default} />
                            <img className="details-basic-img2" src={pokemonDetails.sprites && pokemonDetails.sprites.back_default} />
                    </div>

                    <p>{pokemonDetails.name && firstLetterUpper(pokemonDetails.name)}</p>
                </div>

                <div className="detail-info">
                    <div className="detail-types">
                        
                        {pokemonDetails.types && pokemonDetails.types.map((type, index) => {
                                return(
                                    <>
                                        <img src={`/icons/${type.type.name}.svg`}/>
                                        <p>{firstLetterUpper(type.type.name)}</p>
                                    </>
                                ) 
                        })}
                    </div>

                    <div>
                        <div className="detail-stats">
                            {pokemonDetails.stats && pokemonDetails.stats.map((stat) => {
                                return(
                                    <div className="detail-info-stats">
                                        <p key={stat.stat.name}>{firstLetterUpper(stat.stat.name)}: {stat.base_stat}</p>
                                        <StatBar 
                                            baseStat={stat.base_stat > 100 ? 100 : stat.base_stat}
                                        />
                                    </div>
                                ) 
                            })}
                        </div>

                        <div className="detail-abilities">
                            <h5>Abilities</h5>
                                {pokemonDetails.stats && pokemonDetails.abilities.map((ability) => {
                                    return <p key={ability.ability.name}>{firstLetterUpper(ability.ability.name)}</p>
                                })}
                        </div>
                    </div>
                </div>
            </StyledDetails>
        </div>
    )
}