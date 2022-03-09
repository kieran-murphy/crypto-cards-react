import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "rgb(190, 190, 200)",
  card: "rgb(210, 210, 210)",
  fontColor: "#000",
  cardTextColor: "black",
};

export const darkTheme = {
  body: "rgb(24, 26, 26)",
  card: "rgb(30, 36, 36)",
  fontColor: "aquamarine",
  cardTextColor: "aquamarine",
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
      box-shadow: 0.3rem 0.3rem 1.5rem 1px rgba(0, 255, 106, 0.533);
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
      box-shadow: 0.3rem 0.3rem 1.5rem 1px rgba(255, 4, 4, 0.685);
    }

    #topnav a {
      float: left;
      color: ${(props) => props.theme.fontColor};
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }
    
    #reset {
      float: right;
    }
    
    /* Change the color of links on hover */
    #topnav a:hover {
      background-color: #ddd;
      color: black;
      cursor: pointer;
    }
    
    /* Add a color to the active/current link */
    #topnav a.active {
      background-color: #04aa6d;
      color: white;
    }

`;
