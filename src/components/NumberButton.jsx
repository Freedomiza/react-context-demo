import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { NumberContext } from '../context/NumberProvider';

const Button = styled.button`
  border: 1px solid black;
  padding: 5px;
  font-size: 16px;
`;

const NumberButtonComponent = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <Button type="button" onClick={() => handleSetDisplayValue(buttonValue)} >
      {buttonValue}
    </Button>
  )
};

export default NumberButtonComponent;