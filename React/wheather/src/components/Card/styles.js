import styled from 'styled-components';

export const CardConteiner = styled.div`
  color: #515151;
  background: #fff3e4;
  border: 1px solid #f07c00;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 85%;
  height: 235px;
  margin: auto auto 15px auto;
  
  /* === City and Close === */
  .display{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
  }
  .title__text{
    margin-left: 15px;
  }
  .button,
  .title__text{
    margin-top: 15px;
    font-size: 0.9em;
  }

  /* === Result Wheather === */
  .title__wheather{
    margin: 20px auto 20px 35px;
    font-size: 2.3em;
  }
  
  /* === Result Wheathers === */
  .card-wheathers{
    border-bottom: 1px solid #ffbb77;
    width: 90%;
    margin: auto;
  }
  
  .card-wheather{
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .card-wheather__wheather,
  .card__text span{
    font-weight: 700;
  }

  /*=== Werly ===  */
  .wheather__werly{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto ;
  }
  .wheather__day{
    width: 50px;
    margin: auto;
    text-align: center;
  }
  .wheather__day-title{
    font-size: 0.85em;
    margin-top: 10px;
    margin-bottom: 4px;
  }
  .wheather__day-wheather{
    color: #f07c00;
    font-weight: 700;
    font-size: 0.7em;
    margin-right: 1px;
  }
`
