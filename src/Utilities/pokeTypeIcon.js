export const pokeTypeIcon = (type) => {
    switch (type) {
        case 'normal':
            return <ion-icon name="accessibility-outline"></ion-icon>
        case 'fighting':
            return <ion-icon name="barbell-outline"></ion-icon>
        case 'flying':
            return <ion-icon name="chevron-up-circle-outline"></ion-icon>
        case 'poison':
            return <ion-icon name="medical-outline"></ion-icon>
        case 'ground':
            return <ion-icon name="link-outline"></ion-icon>
        case 'rock':
            return <ion-icon name="triangle-outline"></ion-icon>
        case 'bug':
            return <ion-icon name="bug-outline"></ion-icon>
        case 'ghost':
            return <ion-icon name="skull-outline"></ion-icon>
        case 'steel':
            return <ion-icon name="settings-outline"></ion-icon>
        case 'grass':
            return <ion-icon name="leaf-outline"></ion-icon>
        case 'fire':
            return <ion-icon name="flame-outline"></ion-icon>
        case 'water':
            return <ion-icon name="water-outline"></ion-icon>
        case 'electric':
            return <ion-icon name="flash-outline"></ion-icon>
        case 'psychic':
            return <ion-icon name="eye-outline"></ion-icon>
        case 'ice':
            return <ion-icon name="snow-outline"></ion-icon>
        case 'dragon':
            return <ion-icon name="star-half-outline"></ion-icon>
        case 'dark':
            return <ion-icon name="flame-outline"></ion-icon>
        case 'fairy':
            return <ion-icon name="sparkles-outline"></ion-icon>
        case 'shadow':
            return <ion-icon name="moon-outline"></ion-icon>
        case 'unknown':
            return <ion-icon name="alert-circle-outline"></ion-icon>
        default:
            return <ion-icon name="alarm-outline"></ion-icon>
    }
}