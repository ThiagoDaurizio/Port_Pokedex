    import { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import berry from '../../Json/PokeBerries.json'
import { GhostHeader } from '../../Styles/GhostHeaderDiv'
import { StyledShop, StyledShopCard } from './style'


export const PageShop = () => {
    const {inCart, set_inCart, totalPrice, set_totalPrice, watcher, set_watcher, onLoot, totalMoney, set_totalMoney} = useContext(GlobalStateContext)
    const [searchInput, set_searchInput] = useState('')
    const [filteredList, set_filteredList] = useState([berry.berries])

    useEffect(() => {
        
    }, [watcher])

    const berryList = berry.berries.map((item) => {
        return(
            <StyledShopCard onClick={() => putOnCart(item)} key={item.id}>
                <div className='shop-card-img'>
                    <img src={item.url_image}/>
                </div>
                <p className='shop-card-name'>{item.name}</p>
                <p className='shop-card-price'>$ {item.price}</p>
            </StyledShopCard>
        )
    })

    const putOnCart = (berry) => {
        const id = Date.now()

        const berryNewId = {
            id: id,
            name: berry.name,
            url_image: berry.url_image,
            price: berry.price
        }

        set_inCart([berryNewId, ...inCart])
        set_totalPrice(totalPrice + berry.price)
    }

    const removeCartItem = (item, index) => {
        inCart.splice(index, 1)
        set_totalPrice(totalPrice - item.price)
        set_watcher(watcher + 1)
    }

    const clearCart = () => {
        set_inCart([])
        set_totalPrice(0)
    }



    const endBuy = () => {
        if(totalPrice <= totalMoney){
            for(let i = 0; i < inCart.length; i++){
                for(let h = 0; h < onLoot.length; h++){
                    if(inCart[i].name === onLoot[h].name){
                        onLoot[h].amount = onLoot[h].amount + 1
                    }
                }
            }
            set_totalMoney(totalMoney - totalPrice)
            clearCart()
            set_watcher(watcher + 1)
        } else{ 
            window.alert("You cannot have $ to buy this.")
        }
    }

    const cartItems = inCart.map((item, index) => {
        return(
            <div className='cart-item' key={item.id}>
                <div className='cart-item-img'>
                    <img src={item.url_image} />
                </div>
                <div className='cart-item-text'>
                    <p>| {item.name}</p>
                    <p>R$ {item.price.toFixed(2)}</p>
                    <ion-icon name="close-circle-outline" onClick={() => removeCartItem(item, index)}/>
                </div>
            </div>
        )
    })



    return(
        <div>
            <GhostHeader />
        <StyledShop>
            <div className='shop-items'>
                <div className='shop-items-inputs'>
                    <input 
                        placeholder='Search Item'
                        value={searchInput}
                        onChange={(event) => set_searchInput(event.target.value)}
                    />
                </div>

                <div className='shop-items-berries'>
                    {berryList}
                </div>
            </div>

            <div className='shop-cart'>
                <div className='shop-cart-total'>
                        {totalPrice !== 0 ? <span>TOTAL - $ {totalPrice}</span> : "CARRINHO"}
                        
                </div>
                <div className='shop-cart-buttons'>
                    <button onClick={endBuy}>Finalizar Compra</button>
                    <button onClick={clearCart}>Limpar Carrinho</button>
                </div>

                <div className='shop-cart-item'>
                    
                    {cartItems}
                </div>
            </div>
        </StyledShop>
        </div>
    )
}