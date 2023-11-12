
import React from 'react';
import ThankYouBlock, { getRandomName } from './ThankYouBlock';

function App() {
  const randomName = getRandomName();

  return (
    <div>
      <ThankYouBlock randomName={randomName} />
    </div>
  );
}

export default App;
