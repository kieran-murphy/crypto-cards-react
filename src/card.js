import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons'
import './App.css';

export class Card extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { coin } = this.props
  
    return (
      <motion.div className="item" key={coin.name} >
          <div className={coin.color}>
            <h1>{coin.name}</h1>
            <br></br>
            <div className='stats'>
              <div className='price'>
                <h2>Price: {coin.price}</h2>
              </div>
              <br></br>
              <div className='change'>
                <h2>24hr Change: {coin.change}</h2>
              </div>
              <br></br>
              
            </div>
            {coin.color === "green" ? <TriangleUpIcon w='30' h='30'color='green'/> : <TriangleDownIcon w='30' h='30' color='red'/>}
          </div>
      </motion.div>
    )
  }
  
}

