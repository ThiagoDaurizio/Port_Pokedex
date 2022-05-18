import styled from 'styled-components'
import { projectColors } from '../../Colors/projectColors'

const getColor = (props) => {
    if(props === "unscrolled"){
        return `
        opacity: 1;
        `
    }

    if(props === "scrolled"){
        return `
        opacity: 0.95;
        `
    }
}

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: ${projectColors.primary};
    ${({props}) => getColor(props)}
    min-height: 4em;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    padding: 0.5em;

    display: flex;
    align-items: center;

    .header-buttons{
        margin-left: 2rem;

        button{
        min-width: 100px;
        height: 35px;
        margin-left: 1rem;
        background-color: ${projectColors.details};
        border: 2px solid ${projectColors.text};
        border-radius: 25px;
        cursor: pointer;
        color: ${projectColors.text};
        font-size: 1.2em;
        background-blend-mode: saturation;
        transition: 0.35s;

            :hover{
                background-color: ${projectColors.secondary};
                border: 2px solid ${projectColors.details};
                color: ${projectColors.text}
            }

            :active{
                background-color: ${projectColors.secondary};
                border: 2px solid ${projectColors.details};
                filter: drop-shadow(0 0 5px ${projectColors.details});
                color: ${projectColors.details};
            }
        }
    }

    .header-loot{
        display: flex;
        align-items: center;
        color: ${projectColors.text};
        font-weight: bolder;

        ion-icon{
            transform: translateY(2px);
        }
        
        .header-loot-money{
            margin: 1rem 0 1rem 1rem;
            padding: 0.25em;
            border: 1px solid ${projectColors.text}
        }

        .header-loot-berry{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 2rem;
            background-color: ${projectColors.details};
            outline: 1px solid ${projectColors.text};
            border-radius: 10px;
            min-width: 50px;
            min-height: 50px;

            p{
                margin: 0;
                text-align: center;
                color: ${projectColors.text}
            }

            img{
                width: 1.2em;
                height: 1.2em;
                margin: -10px 10px;
            }
        }
    }

    @media (max-width: 750px){
        flex-direction: column;
        justify-content: center;
        flex-wrap: nowrap;

        .header-buttons{
        margin-left: -2rem;
        }

        .header-loot{
            
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: auto;
            max-width: 85vw;
            margin-top: 15px;

            .header-loot-money{
            text-align: center;
            margin: auto;
            min-width: 25vw;
            }

            .header-loot-berry{
            display: flex;
            min-width: 35vw;
            flex-wrap: wrap;
            margin: auto;

            }
        }
    }

`