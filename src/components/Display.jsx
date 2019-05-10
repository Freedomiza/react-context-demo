import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { NumberContext } from '../context/NumberProvider';

const Display = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DisplayComponent = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <Display>
      <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
      <p>{!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}</p>
    </Display>
  );
}

export default DisplayComponent;