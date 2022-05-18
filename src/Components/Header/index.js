import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { StyledHeader } from "./style"



export const CompHeader = () => {
    const {onLoot, totalMoney, totalPrice} = useContext(GlobalStateContext)
    const [color, set_color] = useState("unscrolled")
    const [moneyIcon, set_moneyIcon] = useState("diamond-outline")

    const navigate = useNavigate()

    const scrolling = () => {
        let scrollY = window.scrollY

        if(scrollY >= 20){
            set_color('scrolled')
        } else if (scrollY <= 20) {
            set_color('unscrolled')
        }
    }

    useEffect(() => {
            if(totalMoney < totalPrice){
                set_moneyIcon("diamond")
            } else {
                set_moneyIcon("diamond-outline")
            }
    }, [totalPrice])

    window.addEventListener("scroll", scrolling)

    const lootItems = onLoot && onLoot.filter((item) => {
        if(item.amount > 0){
            return item
        }
    }).map((item) =>{
        return(
            <div key={item.id}>
                <img src={item.url_image} alt={item.name} />
                <p>{item.amount}x</p>
            </div>
        )
    })


    return(
        <StyledHeader props={color}>
            <div className="header-buttons">
                <button onClick={() => navigate('/')}>HOME</button>
                <button onClick={() => navigate('/pokedex')}>POKEDEX</button>
                <button onClick={() => navigate('/shop')}>SHOP</button>
            </div>

            <div className="header-loot">
                <div className="header-loot-money">
                    <p><ion-icon name={moneyIcon}/> {totalMoney}</p>
                </div>

                <div className="header-loot-berry">
                    {lootItems}
                </div>
            </div>

            
        </StyledHeader>
    )
}