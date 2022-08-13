import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  max-height: calc(100vh - 263px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e7e7e7;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.2);
    background-color: #f9f9fd;
  }
`;

const Column = styled.div`
  display: grid;
  grid-template-rows: 24;
  width: 12.5%;
`;

const ColumnMT = styled(Column)`
  margin-top: 9px;
`;

const Box = styled.div`
  border: 1px solid #e7e7e7;
  height: 90px;
  background-color: ${props => props.thereIsADel ? "#b4b8ff" : props.thereIsANote ? "#ecedff" : "#fff"};
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

function DisplayTime ({ days, notes, delUnix, setDelUnix }) {

  function getHoursArray(day) {
    const hour = day.clone().subtract(1, 'hour');
    const hours = [...Array(24)].map(() => hour.add(1, 'hour').clone());
    return hours;
  }

  const thereIsANote = (unix) => {
    return notes.some(note => note === unix);
  };

  const thereIsADel = (unix) => {
    return unix === delUnix;
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
        return (
          <BoxLeft 
            key={hour.unix()} 
            thereIsANote={thereIsANote(hour.unix())}
            onClick={() => thereIsANote(hour.unix()) ? setDelUnix(hour.unix()) : setDelUnix(null)}
            thereIsADel={thereIsADel(hour.unix())}
          >
          </BoxLeft>
        )
      } else if (i === 6) {
        return (
          <BoxRight 
            key={hour.unix()} 
            thereIsANote={thereIsANote(hour.unix())}
            onClick={() => thereIsANote(hour.unix()) ? setDelUnix(hour.unix()) : setDelUnix(null)}
            thereIsADel={thereIsADel(hour.unix())}
          >  
          </BoxRight>
        )
      } else {
        return (
          <Box 
            key={hour.unix()} 
            thereIsANote={thereIsANote(hour.unix())}
            onClick={() => thereIsANote(hour.unix()) ? setDelUnix(hour.unix()) : setDelUnix(null)}
            thereIsADel={thereIsADel(hour.unix())}
          >
          </Box>
        )
      }
    })

    return (
      <Column key={i}>
        {result}
      </Column>
    )
  })

  return (
      <Wrap>
        <ColumnMT>
          {timesFormat}
        </ColumnMT>
        {timesOfDay}
      </Wrap>
  )
}

export default DisplayTime;