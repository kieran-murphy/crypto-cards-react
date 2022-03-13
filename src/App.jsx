import { WatchListContextProvider, addCoin } from "./context/watchListContext";
import CoinList from "./components/CoinList";
import AddCoin from "./components/AddCoin";
import Nav from "./components/Nav";
import { useRef } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContextProvider } from "./context/themeContext";

const App = () => {
  return (
    <div className="container">
      <ThemeContextProvider>
        <WatchListContextProvider>
          <Nav />

          <CoinList />
        </WatchListContextProvider>
      </ThemeContextProvider>
    </div>
  );
};
export default App;
