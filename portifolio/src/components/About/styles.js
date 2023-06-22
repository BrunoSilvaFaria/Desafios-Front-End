import styled from "styled-components";
export const AboutContainer = styled.section`
    height: 350px;
    margin: 50px auto;
    *{
        color: white;
    }
    
    .title__conteiner{
        width: 130px;
    }
    .bio{
        width: 90%;
        margin: auto;
    }
    .bio,
    .redes{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .foto{
        background: white;
        border-radius: 50%;
        height: 250px;
        width: 250px;
    }
    .description{
        width: 590px;
    }
    .redes{
        width: 200px;
    }
    .redes__item{}
    .redes__link{}

`