import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        outline: 0;
    }

    html,
    body,
    :root{
        width: 100%;
        min-height: 100vh;
        font-family: 'Poppins', sans-serif;
        background-color: rgb(15, 15, 25);
        background-image: url('https://wallpaperforu.com/wp-content/uploads/2020/07/pixel-art-wallpaper-200722200511571440x2560.jpg');
        background-image: url('https://guikao.files.wordpress.com/2012/01/pokemon_wallpaper01_1680.jpg');
        /* background-size: ; */
        background-blend-mode: lighten;
        background-position: top;
    }
`