import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

function Header() {

  return (
    <Flex>
      <p>Interview Calendar</p>
      <button>&#43;</button>
    </Flex>
  )
}

export default Header;