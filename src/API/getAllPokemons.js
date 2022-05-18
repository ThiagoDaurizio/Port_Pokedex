import axios from 'axios'
import { BASE_URL } from '../Constants/BASE_URL'

export const getAllPokemons = (url, set_data) => {
    axios.get(url)
        .then((resp) => {
            set_data(resp.data)
        })
        .catch((error) => {

        })
}