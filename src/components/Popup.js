import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => props.active ? "scale(1)" : "scale(0)"};
`;

const ModalContent = styled.div`
  background-color: #e7e7e8;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-top: 20px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  width: 90%;
  padding: 2px;
  caret-color: #007bff;
  &:active {
    border: none;
  }
`;

const Button = styled.button`
  border-top: 1px solid #818193;
  color: #007bff;
  width: 100%;
  padding: 10px;
  font-size: 18px;
`;

const ButtonBold = styled(Button)`
  font-weight: 600;
  border-right: 1px solid #818193;
`;


function Popup({ active, setActive, notes, setNotes }) {
  const [valueTime, setValueTime] = useState("");

  function saveNote(str) {
    if (!/\d{4}-\d{1,2}-\d{1,2}/.test(str)) {
      alert('Invalid data format');
      return;
    }
    setNotes([...notes, moment(str).startOf('hour').unix()]); 
    setActive(false);
  }

  return (
    <Modal 
      onClick={() => setActive(false)} 
      active={active}
    >
      <ModalContent 
        onClick={e => e.stopPropagation()}
        active={active}
      >
        <p style={{fontSize: "14px"}}>
          <b style={{fontSize: "18px"}}>https://calendar.com</b><br />
          Enter event time: <br />
          YYYY-MM-DD HH:mm
        </p>
        <Input value={valueTime} onChange={e => setValueTime(e.target.value)}/>
        <Flex>
          <ButtonBold onClick={() => setActive(false)}>Cancel</ButtonBold>
          <Button 
            onClick={() => {
              saveNote(valueTime);
              setValueTime("");
            }
          }>
            OK
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default Popup;