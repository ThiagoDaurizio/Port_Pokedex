import styled from 'styled-components'
import { projectColors } from '../../Colors/projectColors'
import { typeColor } from '../../Colors/typesColors'


export const StyledHome = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

`

export const StyledHomeSearch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1s;

    input{
            padding: 0 0.55em;
            width: 15rem;
            height: 2rem;
            border: 1px solid ${projectColors.primary};
            border-radius: 10px;
            color: ${projectColors.details};
        }

    form{
        button{
            background-color: ${projectColors.primary};
            height: 2rem;
            padding: 0.25em;
            border-radius: 0 12px 12px 0;
            border: 1px solid ${projectColors.primary};
            cursor: pointer;
            color: ${projectColors.text};
            font-weight: bolder;
            transition: 0.25s;

            :hover{
                background-color: ${projectColors.secondary};
            }

            :active{
                filter: drop-shadow(0 0 4px ${projectColors.text});
            }
        }

        input{
            border-radius: 10px 0 0 10px;
        }
    }

    .button-close{
            background-color: ${projectColors.text};
            width: 100px;
            height: 30px;
            border-radius: 32px;
            border: 2px solid transparent;
            color: ${projectColors.details};
            font-weight: bolder;
            font-size: 1.1em;
            text-transform: uppercase;
            cursor: pointer;
            transition: 0.35s;

            :hover{
                background-color: ${projectColors.primary};
                color: ${projectColors.text};
                border: 2px solid ${projectColors.text}
            }

            :active{
                filter: drop-shadow(0 0 4px ${projectColors.text});
            }
    }


    .home-menu{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: ${projectColors.details};
        border-radius: 13px;
        width: 20rem;
        min-height: 10rem;
        transition: 1s;
        padding: 0.75em;
    }
`

export const StyledHomeButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    height: 50px;
    border-radius: 32px;
    margin: 0.50rem auto;
    font-size: 1.3em;
    background-color: ${projectColors.primary};
    color: ${projectColors.text};
    opacity: 0.6;
    transition: 0.65s ease-out;
    border: 1px solid transparent;

    :hover{
        opacity: 0.95;
        border: 1px solid ${projectColors.details};
    }
    
    ion-icon{
        transform: translateY(5px);
    }

    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.5em;
        margin: 1rem;
        transition: 0.3s ease-in-out;
        color: ${projectColors.text};

        :hover:nth-child(1){
            color: ${projectColors.details};
            transform: translateX(-5px);
        }

        :hover:nth-child(2){
            color: ${projectColors.details};
            transform: translateX(5px);
        }

        :active{
            font-size: 1.55em;
            filter: drop-shadow(0 0 5px ${projectColors.text});
        }
    }
`

const getContent = (name) => {
    return`
    content: '${name}';
    `
}

export const StyledHomeCard = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .poke-type{
            transform: translateY(12.5rem);
            width: 50px;
            height: 50px;
            z-index: 100;
            position: sticky;
        }
`

export const StyledHomeCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    height: 195px;
    width: 150px;
    padding: 0.25em;

    .card-img{
        width: 150px;
        height: 125px;
        border: 1px solid black;
        margin: 1em;
        border-radius: 5%;
        background-color: silver;
        background-image: url('https://img.myloview.com.br/quadros/vector-of-pixel-city-pixel-art-background-80s-retro-sci-fi-background-pixel-skyline-city-8-bit-400-157112262.jpg');
        background-size: cover;
        transition: 0.5s ease-out;
    
        :hover {
            border: 1px solid silver;
            
            img{
                transform: scale(1.2);
                cursor: pointer;
                filter: drop-shadow(0 0 5px ${projectColors.text});
            }
        }
    }

    img{
        width: 125px;
        height: 125px;
        transition: 0.5s;
    }

    ::before{
        ${({name}) => getContent(name)}
        width: 95%;
        height: 35px;
        background-color: red;
        border-radius: 900px 900px 3px 3px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: -23px;
    }

    ::after{
        content: 'o';
        width: 95%;
        height: 25px;
        background-color: white;
        border-radius: 3px 3px 900px 900px;
        margin-top: -23px;
    }
`