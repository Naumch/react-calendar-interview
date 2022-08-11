import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  background-color: #f6f6f6;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 20px 10px 12.5%;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  width: 14.3%;
  text-align: center;
`;

const NameDay = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

const NumberDay = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 8px;
`;

const CurrentDay = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  width: 34px;
  height: 34px;
  margin: 4px auto;
  background-color: #ff2d2d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Month = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

function DisplayDays({ days, startingPoint, prevHandler, nextHandler }) {

  const isCurrentDay = (day) => moment().isSame(day, 'day');

  const result = days.map(day => {
    return (
      <Item key={day.unix()}>
        <NameDay>{day.format('dd')[0]}</NameDay>
        {
          isCurrentDay(day) 
          ? <CurrentDay>{day.format('D')}</CurrentDay> 
          : <NumberDay>{day.format('D')}</NumberDay>
        }
      </Item>
    )
  })

  return (
    <Wrapper>
      <Flex>
        {result}
      </Flex>
      <Flex>
        <Item>
          <button onClick={prevHandler}>&#8249;</button>
        </Item>
        <Month>{startingPoint.format('MMMM YYYY')}</Month>
        <Item>
          <button onClick={nextHandler}>&#8250;</button>
        </Item>
      </Flex>
    </Wrapper>
  )
}

export default DisplayDays;