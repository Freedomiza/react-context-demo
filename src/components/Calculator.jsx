import React from 'react';
import styled from '@emotion/styled';

import Display from './Display';
import NumberButton from './NumberButton';

const Container = styled.div`
  min-width: 500px;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NumberRows = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 5px;
`;
const FunctionRows = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalculatorComponent = () => {
  const buttons = [1,2,3,4,5,6,7,8,9];
  return (
    <Container>
      <Display />
      <NumberRows>
        {buttons.map(number => <NumberButton key={number} buttonValue={number} />)}
      </NumberRows>
      <FunctionRows>
        
      </FunctionRows>
    </Container>
  )
};

export default CalculatorComponent;
