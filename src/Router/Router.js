import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompHeader } from "../Components/Header";
import { PageDetails } from "../Pages/DetailsPage";
import { PageError } from "../Pages/ErrorPage";
import { PageHome } from "../Pages/HomePage";
import { PagePokedex } from "../Pages/PokedexPage";
import { PageShop } from "../Pages/ShopPage";


export const Router = () => {
    return(
        <BrowserRouter>
            <CompHeader/>
            <Routes>
                <Route path='/' element={ <PageHome/> }/>

                <Route path='/pokedex' element={ <PagePokedex/> }/>

                <Route path='shop' element={ <PageShop/> }/>

                <Route path='/details/:id' element={ <PageDetails/> }/>

                <Route element={ <PageError/> } />
            </Routes>
        </BrowserRouter>
    )
}