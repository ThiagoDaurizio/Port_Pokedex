import styled from 'styled-components'
import { projectColors } from '../../Colors/projectColors'

export const StyledShop = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0 1rem;

    .shop-items{
        background-color: rgb(195, 195, 195);
        border-radius: 10px 10px 10px 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        padding: 0.5em;
        min-height: 75vh;

        .shop-items-inputs{
            input{
                height: 2rem;
                width: 25rem;
                opacity: 0.7;
                transition: 0.25s ease-in-out;
                border: 1px solid ${projectColors.details};
                border-radius: 32px;
                padding: 0 1em;
                font-size: 1.2em;
                color: ${projectColors.details};
                margin-bottom: 1rem;

                :hover, :focus{
                    opacity: 1;
                    border-radius: 12px;
                    border: 1px solid ${projectColors.secondary};
                }
            }
        }

        .shop-items-berries{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }
    }

    .shop-cart{
        background-color: rgb(195, 195, 195);
        border-radius: 10px 20px 20px 10px;
        width: 25vw;
        padding: 0.5em;
        overflow-y: scroll;
        height: 25rem;

        .shop-cart-total{
            background-color: ${projectColors.primary};
            text-align: center;
            border-radius: 10px;
            color: ${projectColors.details};
            font-weight: bold;
            font-size: 1.2em;
            outline: 2px solid ${projectColors.details};
        }

        .shop-cart-buttons{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0.5rem;

            button{
                background-color: ${projectColors.details};
                min-width: 8rem;
                height: 2rem;
                margin: 0.25rem;
                border: 2px solid ${projectColors.text};
                cursor: pointer;
                border-radius: 5px;
                color: ${projectColors.text};
                font-size: 0.9em;
                font-weight: bolder;
                transition: 0.5s;

                :hover{
                    background-color: ${projectColors.secondary};
                    color: ${projectColors.details};
                    transform: translateY(-2px);
                    border: 2px solid ${projectColors.details};
                }

                :active{
                    border: 2px solid ${projectColors.details};
                    color: ${projectColors.text};
                    opacity: 0.9;
                }
            }
        }

        .shop-cart-item{
            .cart-item{
                display: flex;
                margin-top: 1rem;
                align-items: center;

                ion-icon{
                    color: gray;
                    cursor: pointer;
                    font-size: 1.5em;
                    transition: 0.7s;
                    font-weight: bolder;
                }

                :hover ion-icon{
                        transform: translateX(5px);
                        transform: translateY(-5px);
                        color: red
                    }

                .cart-item-img{
                    background-color: white;
                    border: 2px solid ${projectColors.details};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 75px;
                    height: 55px;
                    padding: 0.5em;
                    border-radius: 10px;

                    img{
                        width: 50px;
                        height: 50px;
                    }
                }

                .cart-item-text{
                    width: 100%;
                    height: 50px;

                    p:nth-child(1){
                        background-color: ${projectColors.secondary};
                        width: 80%;
                        border-radius: 0 5px 5px 0;
                        color: ${projectColors.text};
                        font-weight: bolder;
                        font-size: 0.9em;
                        border: 2px solid ${projectColors.details};
                    }

                    p:nth-child(2){
                        background-color: ${projectColors.secondary};
                        width: 35%;
                        margin-left: 2rem;
                        border-radius: 0 0 5px 5px;
                        text-align: center;
                        border: 2px solid ${projectColors.details};
                        color: ${projectColors.text};
                        font-size: 0.8em;
                    }
                }
            }
        }
    }

    @media (max-width: 1330px){
        display: flex;
        flex-direction: column-reverse;

        .shop-cart{
        background-color: rgb(195, 195, 195);
        width: 80vw;
        height: 200px;
        max-height: 1000px;
        min-height: 200px;
        margin: auto;
        }

        .shop-items{
            width: 80vw;
            margin: auto;
        }

        .shop-items-inputs{
            input{
                max-width: 65vw;
                margin-bottom: 1rem;
            }
        }
    }
`

export const StyledShopCard = styled.div`
    height: 175px;
    transition: 1s;
    cursor: pointer;

    :hover{
        .shop-card-img{
            border: 2px solid ${projectColors.details};

        }

        .shop-card-img img{
            filter: drop-shadow(0 0 5px ${projectColors.secondary}) drop-shadow(0 0 7px ${projectColors.details})
        }
    }

    .shop-card-img{
        width: 120px;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${projectColors.secondary};
        border-radius: 5px;
        background-color: white;
        transition: 0.5s;

        img{
            transition: 0.5s;
            width: 75%;
            height: 75%;
        }
    }

    .shop-card-name{
        border: 2px solid ${projectColors.details};
        width: 80%;
        font-size: 0.9em;
        margin: auto;
        text-align: center;
        border-radius: 0 0 5px 5px;
        background-color: ${projectColors.primary};
        color: ${projectColors.text};
        font-weight: bolder;
    }

    .shop-card-price{
        border: 2px solid ${projectColors.details};
        width: 60%;
        font-size: 0.8em;
        margin: auto;
        text-align: center;
        border-radius: 0 0 15px 15px;
        background-color: ${projectColors.primary};
        color: ${projectColors.text};
    }

`