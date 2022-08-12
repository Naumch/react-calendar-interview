import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  background-color: #f6f6f6;
  border-top: 1px solid #e7e7e7;
  padding: 10px 0 10px 12.5%;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 6%;
`;

const Button = styled.button`
  font-size: 22px;
`;

function Footer({ setStartingPoint }) {
  
  return (
    <Wrapper>
      <Button onClick={() => setStartingPoint(moment())}>Today</Button>
      <Button>Delete</Button>
    </Wrapper>
  )
}

export default Footer;