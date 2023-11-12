import React from 'react';
import './ThankYouBlock.css';

export function getRandomName() {
    const names = ['Vladyslav', 'Andrii', 'Bohdan'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName;
}

const ThankYouBlock = ({ randomName }) => {
    return (
      <div className="thank-you-block">
        <div className="thank-you-body">
          <h2>Thank you, {randomName}, for visiting this page!</h2>
        </div>
      </div>
    );
}

export default ThankYouBlock;