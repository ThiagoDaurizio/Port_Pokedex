import styled from 'styled-components'
import { projectColors } from '../../Colors/projectColors'


export const StyledDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    color: white;
    background-size: cover;

    .detail-basic{
        display: flex;
        flex-direction: column;

        img{
            background-color: white;
        }

        p{
            background-color: ${projectColors.primary};
            border: 2px solid ${projectColors.details};
            margin-left: 1rem;
            min-width: 6rem;
            text-align: center;
            border-radius: 5px 0 0 12px;
            font-weight: bolder;
            letter-spacing: 2px;
        }

        .details-basic-img{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .details-basic-img1{
            border: 2px solid ${projectColors.details};
            border-radius: 25px 0 0 0 ;
            margin-bottom: -7px;
            width: 8rem;
            height: 8rem;
        }

        .details-basic-img2{
            border: 2px solid ${projectColors.details};
            border-radius: 0 0 0 25px ;
            width: 8rem;
            height: 8rem;
        }
    }

    .detail-info{
        height: 20rem;
    }

    .detail-types{
        display: flex;
        justify-content: left;
        align-items: center;
        background-color: ${projectColors.primary};
        margin: 0;
        border: 2px solid ${projectColors.details};
        border-radius: 12px 500px 0 0;
        max-width: 13rem;

        img{
            width: 2.5rem;
        }
    }

    
    .detail-stats{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid ${projectColors.details};
        background-color: ${projectColors.primary};
        height: 100%;
        width: 60vw;
        max-width: 400px;
        border-radius: 0 25px 0 0;
    }

    .detail-info-stats{
        margin: 0.5rem 0.25rem;
        }

    .detail-abilities{
        background-color: ${projectColors.details};
        border: 2px solid ${projectColors.details};
        width: 60vw;
        max-width: 400px;
        border-radius: 0 0 15px 15px;

        h5{
            margin: 0;
            margin-left: 1rem;
            letter-spacing: 1px;
        }

        p{
            display: inline-block;
            margin: 0.25em;
            padding: 0.25em 0.50em;
            background-color: ${projectColors.secondary};
            border-radius: 32px;
            outline: 1px solid ${projectColors.text};
        }
    }
`

export const StatBar = styled.div`
    width: 80%;
    background-color:${projectColors.text};
    height: 0.6rem;
    position: relative;
    top: -0.1rem;
    border-radius: 0.5rem;


    ::after{
        content: '';
        height: 0.6rem;
        width: ${(props) => props.baseStat + "%"};
        background-color: ${projectColors.secondary};
        position: absolute;
        border-radius: 0.5rem;
        outline: 1px solid ${projectColors.details};
    }
`