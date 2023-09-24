//from new branch

import React, { useState } from 'react';

// User View Component
const UserViewCard = ({ card }) => {
  return (
    <div>
      <h2>User View</h2>
      <p>Title: {card.title}</p>
      {/* Display other card details here */}
    </div>
  );
};

const Card = ({ card }) => {
  const [isUserViewVisible, setIsUserViewVisible] = useState(false);

  const toggleUserView = () => {
    setIsUserViewVisible(!isUserViewVisible);
  };

  return (
    <div>
      <h2>{card.title}</h2>
      {/* Display other card details here */}
      
      {isUserViewVisible ? (
        <UserViewCard card={card} />
      ) : (
        <button onClick={toggleUserView}>View User</button>
      )}
    </div>
  );
};

// Your CardList component can use the Card component for each card
const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};
