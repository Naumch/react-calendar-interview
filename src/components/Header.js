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

function Header() {

  return (
    <Wrap>
      <Title>Interview Calendar</Title>
      <button>&#65291;</button>
    </Wrap>
  )
}

export default Header;