import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "whitesmoke",
  card: "rgb(240,240,240)",
  fontColor: "#000",
  cardTextColor: "black",
  greenShadow: "0.3rem 0.3rem 1.5rem 1px rgba(4, 4, 4, 0.685)",
  redShadow: "0.3rem 0.3rem 1.5rem 1px rgba(4, 4, 4, 0.685)",
  addCoinShadow: "0.2rem 0.2rem 1rem 1px rgba(4, 4, 4, 0.685)",
  addCoinShadowHover: "0.2rem 0.2rem 1rem 1px rgba(0, 255, 106, 0.685)",
  yesResetHover: "0.2rem 0.2rem 1rem 1px rgba(0, 255, 106, 0.685)",
  noResetHover: "0.2rem 0.2rem 1rem 1px rgba(255, 4, 4, 0.685)",
  addCoinHover: "rgba(0,0,0,0.6)",
};

export const darkTheme = {
  body: "rgb(24, 26, 26)",
  card: "rgb(30, 36, 36)",
  fontColor: "aquamarine",
  cardTextColor: "aquamarine",
  greenShadow: "0.3rem 0.3rem 1.5rem 1px rgba(0, 255, 106, 0.533)",
  redShadow: "0.3rem 0.3rem 1.5rem 1px rgba(255, 4, 4, 0.685)",
  addCoinShadow: "0.2rem 0.2rem 1rem 1px rgba(4, 4, 4, 0.685)",
  addCoinShadowHover: "0.2rem 0.2rem 1rem 1px rgba(0, 255, 106, 0.685)",
  yesResetHover: "0.2rem 0.2rem 1rem 1px rgba(0, 255, 106, 0.685)",
  noResetHover: "0.2rem 0.2rem 1rem 1px rgba(255, 4, 4, 0.685)",
  addCoinHover: "rgba(230,230,230,0.7)",
};

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
    }

    .green {
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.card};
      color: ${(props) => props.theme.cardTextColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 2rem;
      /* pointer-events: none; */
      box-shadow: ${(props) => props.theme.greenShadow};
    }

    .red {
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.card};
      color: ${(props) => props.theme.cardTextColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 2rem;
      /* pointer-events: none; */
      box-shadow: ${(props) => props.theme.redShadow};
    }

    #topnav a {
      float: left;
      color: ${(props) => props.theme.fontColor};
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
      border-radius: 1rem;
      margin-left: 1rem;
      transition: background-color 0.3s;
    }
    
    /* Change the color of links on hover */
    #topnav a:hover {
      background-color: #ddd;
      color: black;
      cursor: pointer;
    }
    

    #loading {
      color: ${(props) => props.theme.fontColor};
    }

    #addCoin {
      height: 5rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;  
      margin-top: 2rem;
      background-color: ${(props) => props.theme.card};
      color: ${(props) => props.theme.cardTextColor};
      border-radius: 1rem;
      box-shadow: ${(props) => props.theme.addCoinShadow};
    }
      
    
    #addCoin:hover {
      cursor: pointer;
      color: ${(props) => props.theme.addCoinHover};
      box-shadow: ${(props) => props.theme.addCoinShadowHover};
    }

    #addCoinName {
      width: 40%;
    }

    #yesReset {
      height: 5rem;
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;  
      margin-top: 2rem;
      background-color: ${(props) => props.theme.card};
      color: ${(props) => props.theme.cardTextColor};
      border-radius: 1rem;
      box-shadow: ${(props) => props.theme.addCoinShadow};
    }
      
    
    #yesReset:hover {
      cursor: pointer;
      color: ${(props) => props.theme.addCoinHover};
      box-shadow: ${(props) => props.theme.yesResetHover};
    }

    #noReset {
      height: 5rem;
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;  
      margin-top: 2rem;
      background-color: ${(props) => props.theme.card};
      color: ${(props) => props.theme.cardTextColor};
      border-radius: 1rem;
      box-shadow: ${(props) => props.theme.addCoinShadow};
    }
      
    
    #noReset:hover {
      cursor: pointer;
      color: ${(props) => props.theme.addCoinHover};
      box-shadow: ${(props) => props.theme.noResetHover};
    }

    

    #modal {
      position: fixed;
      top: 50%;
      left: 50%;
      height: 85%;
      width: 55%;
      border-radius: 2rem;
      transform: translate(-50%, -50%);
      zIndex: 1000;
      background-color: ${(props) => props.theme.body};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #graphModal {
      position: fixed;
      top: 50%;
      left: 50%;
      height: 85%;
      width: 75%;
      border-radius: 2rem;
      transform: translate(-50%, -50%);
      zIndex: 1000;
      background-color: ${(props) => props.theme.body};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #resetModal {
      position: fixed;
      top: 40%;
      left: 50%;
      height: 55%;
      width: 55%;
      border-radius: 2rem;
      transform: translate(-50%, -50%);
      zIndex: 1000;
      background-color: ${(props) => props.theme.body};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #inner_scroll {
      height: 85%;
      width: 85%;
      background-color: ${(props) => props.theme.body};
      padding: 5px;
      overflow-y: scroll;
      zIndex: 1001;
      display: flex;
      flex-direction: row;
      justify-content: center; 
    }

    #dropdown {
      width: 90%;
    }

    #overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.7);
      zIndex: 1000;
    }

    #addCoinClose {
      height: 5rem;
      width: 84%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      background-color: ${(props) => props.theme.card};
      color: ${(props) => props.theme.cardTextColor};
      border-radius: 1rem;
      box-shadow: ${(props) => props.theme.addCoinShadow};
    }

    #addCoinClose:hover {
      cursor: pointer;
      color: ${(props) => props.theme.addCoinHover};
      box-shadow: ${(props) => props.theme.noResetHover};
    }

    
    #resetWarning {
      
      color: ${(props) => props.theme.fontColor};
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 25px;
      border-radius: 1rem;
      margin-left: 1rem;

    }

    #graph {
      width: 90%;
      height: 90%;
    }

    #myChart {
      width: 80%;
      height: 80%;
    }

    
    

    

`;
