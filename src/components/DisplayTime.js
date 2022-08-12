import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  overflow-y: scroll;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 12.5%;
`;

const FlexColumnMT = styled(FlexColumn)`
  margin-top: 9px;
`;

const Box = styled.div`
  border: 1px solid #e7e7e7;
  height: 90px;
  &:first-child {
    border-top: none;
  }
`;

const BoxLeft = styled(Box)`
  border-left: none;
`;

const BoxRight = styled(Box)`
  border-right: none;
`;

const BoxTimesFormat = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-right: 10px;
  height: 90px;
  color: #c1c1c1;
`;

function DisplayTime ({ days }) {

  function getHoursArray(day) {
    const hour = day.clone().subtract(1, 'hour');
    const hours = [...Array(24)].map(() => hour.add(1, 'hour').clone());
    return hours;
  }

  const timesFormat = getHoursArray(moment().startOf('day')).map((hour, i) => {
    if (i === 0) {
      return null;  
    }

    return <BoxTimesFormat key={hour.unix()}>{hour.format('HH:mm')}</BoxTimesFormat>;
  })
  
  const timesOfDay = days.map((day, i) => {
    const result = getHoursArray(day).map(hour => {
      if (i === 0) {
        return <BoxLeft key={hour.unix()}></BoxLeft>
      } else if (i === 6) {
        return <BoxRight key={hour.unix()}></BoxRight>;
      } else {
        return <Box key={hour.unix()}></Box>;
      }
    })
    return (
      <FlexColumn key={i}>
        {result}
      </FlexColumn>
    )
  })

  return (
    <Wrap>
      <FlexColumnMT>
        {timesFormat}
      </FlexColumnMT>
      {timesOfDay}
    </Wrap>
  )
}

export default DisplayTime;