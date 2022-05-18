import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { StyledHomeCard, StyledHomeCardContent } from "./style"



export const Cardsearch = (props) => {
    const {search} = props
    const {set_pokemonDetails} = useContext(GlobalStateContext)

    const navigate = useNavigate()

    const goToDetails = () => {
        set_pokemonDetails(search)
        navigateDetails(search.name)
    }

    const navigateDetails = (name) => {
        navigate(`/details/${name}`)
    }

    return(
        <div>
            <StyledHomeCardContent name={search.name ? search.name : ""}>
                <div className="card-img">
                    <img 
                        src={
                            search !== "" 
                        ? 
                        search.sprites.front_default 
                        : 
                        'https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif'} 
                        
                        alt={search.name}
                        
                        onClick={() => goToDetails()}
                        />
                </div>
            </StyledHomeCardContent>
        </div>
    )
}