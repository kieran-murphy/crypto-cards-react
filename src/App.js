import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState, Component } from 'react'; 
import images from './images';
import coinsdata from './coins';
import { Card } from './components/card';


function App() {

  const [width, setWidth] = useState(0);
  const [coins, setCoins] = useState(coinsdata);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

  }, [])


  return (
    <div className="App">
      
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div  drag="x" dragConstraints={{ right : 0, left: -width }} className="inner-carousel">
          {coins.map(coin => {
            return(
              <Card coin={coin}></Card>
            )
          })}
        </motion.div>
      </motion.div>

      
      {/* <div className="example-container">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={{setCoins(coins => [...coins, {name:"New coin", color: "green", price:7302.76, change:"6.63%"}])}}
        />
      </div> */}
      {/* <button onClick={
        setCoins(coins => [...coins, {name:"New coin", color: "green", price:7302.76, change:"6.63%"}])
        }>
        Activate Lasers
      </button> */}
    </div>
  );
}





export default App;
