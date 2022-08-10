import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 740px;
  margin: 0 auto;
  border: 1px solid darkblue;
`;

function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default App;
