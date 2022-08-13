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

const ButtonDelete = styled(Button)`
  opacity: ${props => props.delUnix ? "100" : "0"};
  cursor: ${props => props.delUnix ? "pointer" : "auto"};
`;

function Footer({ setStartingPoint, delUnix, setDelUnix, setNotes, notes }) {

  const remNote = (unix) => {
    setNotes(notes.filter(note => note !== unix));
    setDelUnix(null);
  }
  
  return (
    <Wrapper>
      <Button onClick={() => setStartingPoint(moment())}>Today</Button>
      <ButtonDelete
        delUnix={delUnix}
        onClick={() => remNote(delUnix)}
      >
        Delete
      </ButtonDelete>
    </Wrapper>
  )
}

export default Footer;