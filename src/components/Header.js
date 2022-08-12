import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 6%;
`;

const Title = styled.h2`
  font-weight: normal;
`;

function Header({ setActive }) {

  return (
    <Wrap>
      <Title>Interview Calendar</Title>
      <button onClick={() => setActive(true)}>&#65291;</button>
    </Wrap>
  )
}

export default Header;