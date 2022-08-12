import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f6f6f6;
  border-top: 1px solid #e7e7e7;
  padding: 10px 0 10px 12.5%;
  flex: 0 0 auto;
`;

function Footer() {
  
  return (
    <Wrapper>
      <button>Today</button>
    </Wrapper>
  )
}

export default Footer;