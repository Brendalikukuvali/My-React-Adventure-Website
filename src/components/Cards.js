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
              src='images/Falls.jpg'
              text='Explore the hidden deep and beautiful Fourteen falls in Thika Kenya'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/imageB.jpg'
              text='Travel through and get a chance to have an amazing moment at the beach in Mombasa'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/imageE.jpg'
              text='Set Sail in the Indian Ocean and have a fun time'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/Island.jpg'
              text='Experience the cool climate of the Rusinga Islands'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/Chalbi.jpg'
              text='Ride through the Chalbi Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='images/Lion.jpg'
              text='Visit the Maasai Mara National Park to see the big five animals'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/Mount.jpg'
              text='You will have a chance to see The Mount Kenya Trek'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/Stone.jpg'
              text='Visit the Crying Stone in Kakamega county'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/Springs.jpg'
              text='Having fun visiting hot Springs of Lake Bogoria'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/Rift.jpg'
              text='Get to experience the Great Rift Valley'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/Uhuru.jpg'
              text='The fascinating Uhuru Gardens located in Nairobi'
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