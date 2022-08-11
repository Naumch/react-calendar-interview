import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

function DisplayDays({ days, startingPoint, prevHandler, nextHandler }) {

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