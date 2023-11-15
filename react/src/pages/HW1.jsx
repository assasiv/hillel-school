import React from 'react';
import ThankYouBlock, { getRandomName } from '../components/ThankYouBlock';

const HW1 = () => {
    const randomName = getRandomName();
      return (
        <div>
          <ThankYouBlock randomName={randomName} />
        </div>
      );
};

export default HW1;