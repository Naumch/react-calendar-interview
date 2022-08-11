import React, { useState } from 'react';
import Header from './Header';
import DisplayDays from './DisplayDays';
import DisplayTime from './DisplayTime';
import styled from 'styled-components';
import moment from 'moment';

moment.updateLocale('en', {week: {dow: 1}});

const Wrapper = styled.div`
  max-width: 740px;
  margin: 0 auto;
  border: 1px solid darkblue;
`;

function App() {
  const [startingPoint, setStartingPoint] = useState(moment());

  const firstDateOfWeek =  startingPoint.clone().startOf('week');
  const day = firstDateOfWeek.clone().subtract(1, 'day');
  const days = [...Array(7)].map(() => day.add(1, 'day').clone());

  const prevHandler = () => setStartingPoint(prev => prev.clone().subtract(1, 'week'));
  const nextHandler = () => setStartingPoint(next => next.clone().add(1, 'week'));

  return (
    <Wrapper>
      <Header />
      <DisplayDays 
        days={days}
        startingPoint={startingPoint}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <DisplayTime 
        days={days}
      />
    </Wrapper>
  );
}

export default App;
