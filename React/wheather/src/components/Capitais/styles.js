import styled from 'styled-components';

export const City = styled.div`
    margin: auto;
    width: 90%;
    @media (min-width: 800px) {
    .citys__display{
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    }
    .subtitle{ 
        color: #fff; 
        margin: 20px 0 15px 0;
    }

    .header{}
    .header__text{
        font-size: 0.75em;  
    }

    .list__item{
        margin: 10px 0 15px 0;
    }


    .list__item--min,
    .list__item--max,
    .list__city{
        font-size: 0.85em;
        font-weight: 700;
    }


    .list__item span,
    .header__text:first-child{
        margin-right: 10px;
    }
`
