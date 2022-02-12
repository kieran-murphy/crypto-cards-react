import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react'; 
import images from './images';
import coins from './coins';
import { Card } from './card';

function App() {

  const [width, setWidth] = useState(0);
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
    </div>
  );
}





export default App;
