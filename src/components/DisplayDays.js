import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

function DisplayDays() {
  const [startingPoint, setStartingPoint] = useState(moment());

  const firstDateOfWeek =  startingPoint.clone().startOf('week');
  const day = firstDateOfWeek.clone().subtract(1, 'day');
  const days = [...Array(7)].map(() => day.add(1, 'day').clone());

  const prevHandler = () => setStartingPoint(prev => prev.clone().subtract(1, 'week'));
  const nextHandler = () => setStartingPoint(next => next.clone().add(1, 'week'));

  const result = days.map(day => {
    return (
      <div key={day.unix()}>
        <div>{day.format('dd')[0]}</div>
        <div>{day.format('D')}</div>
      </div>
    )
  })

  return (
    <>
      <Flex>
        {result}
      </Flex>
      <Flex>
        <button onClick={prevHandler}>&#129121;</button>
        <p>{startingPoint.format('MMMM YYYY')}</p>
        <button onClick={nextHandler}>&#129123;</button>
      </Flex>
    </>
  )
}

export default DisplayDays;