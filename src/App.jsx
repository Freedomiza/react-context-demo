import React from 'react';

import NumberProvider from './context/NumberProvider';
import Calculator from './components/Calculator';



function App() {
  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
