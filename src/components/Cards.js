import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/imageB.jpg'
              text='Explore the hidden deep and beautiful waterfalls'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/imageC.jpg'
              text='Travel through and get a chance to have an amazing moment at the beach'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/imageF.jpg'
              text='Set Sail in the Indian Ocean and have a fun time'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/imageE.jpg'
              text='Experience the cool climate of different Islands'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/imageD.jpg'
              text='Ride through the Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;