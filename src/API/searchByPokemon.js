import axios from 'axios'
import { BASE_URL } from '../Constants/BASE_URL'

export const searchByPokemon = (url, set_data, set_result) => {
    axios.get(url)
        .then((resp) => {
            set_data(resp.data)
            set_result(true)
        })
        .catch((error) => {
            set_data([])
            set_result(false)
            window.alert("Pokemon name not exists.")
        })
}