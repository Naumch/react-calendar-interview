import React from 'react';
import Header from './Header';
import DisplayDays from './DisplayDays';
import styled from 'styled-components';
import moment from 'moment';

moment.updateLocale('en', {week: {dow: 1}});

const Wrapper = styled.div`
  max-width: 740px;
  margin: 0 auto;
  border: 1px solid darkblue;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <DisplayDays />
    </Wrapper>
  );
}

export default App;
