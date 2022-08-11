import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

function DisplayTime ({ days }) {
  
  const times = days.map((day, i) => {
    const hour = day.clone().subtract(1, 'hour');
    const hours = [...Array(24)].map(() => hour.add(1, 'hour').clone());
    const result = hours.map(hour => {
      return <div key={hour.unix()}>{hour.format("HH")}</div>;
    })
    return <Flex key={i}>{result}</Flex>;
  })

  return (
    <Wrap>
      {times}
    </Wrap>
  )
}

export default DisplayTime;