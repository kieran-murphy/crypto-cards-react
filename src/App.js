import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';
import { Select } from '@chakra-ui/react'
import { useRef, useEffect, useState, Component } from 'react'; 
import images from './images';
import coinsdata from './coins';
import Card from "./components/Card";


function App() {

  const [width, setWidth] = useState(0);
  const [coins, setCoins] = useState(coinsdata);
  const carousel = useRef();

  
  const addCard = () => {
    setCoins([...coins, {name:"New coin", color: "green", price:7302.76, change:"6.63%"}])
  };

  const deleteCard = (coin) => {
    setCoins(
      coins.filter((el) => {
        return el.name !== coin.name;
      })
    );
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [coins])


  return (
    <div className="App">
      
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div  drag="x" dragConstraints={{ right : 0, left: -width }} className="inner-carousel">
          {coins.map(coin => {
            return(
              <Card key={coin.name} coin={coin} deleteCard={deleteCard}></Card>
            )
          })}
        </motion.div>
      </motion.div>

      <div className='add'>
        <select placeholder='Select option'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </select>
        
        <div className="example-container">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={addCard}
          >
            Add Card
          </motion.button>
        </div>
      </div>
    </div>
  );
}





export default App;
