import React, { useState } from 'react';
import Header from './Header';
import DisplayDays from './DisplayDays';
import DisplayTime from './DisplayTime';
import Footer from './Footer';
import styled from 'styled-components';
import moment from 'moment';
import Popup from './Popup';

moment.updateLocale('en', {week: {dow: 1}});
window.moment = moment;

const Wrapper = styled.div`
  max-width: 740px;
  margin: 0 auto;
  border: 1px solid #e7e7e7;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const initEvents = [1660381200, 1660294800, 1660208400, 1660122000, 1660035600, 1660046400];

function App() {
  const [startingPoint, setStartingPoint] = useState(moment());
  const [active, setActive] = useState(false);
  const [notes, setNotes] = useState(initEvents);
  const [delUnix, setDelUnix] = useState(null);

  const firstDateOfWeek =  startingPoint.clone().startOf('week');
  const day = firstDateOfWeek.clone().subtract(1, 'day');
  const days = [...Array(7)].map(() => day.add(1, 'day').clone());

  const prevHandler = () => setStartingPoint(prev => prev.clone().subtract(1, 'week'));
  const nextHandler = () => setStartingPoint(next => next.clone().add(1, 'week'));

  return (
    <Wrapper>
      <div style={{flex: "1 0 auto"}}>
      <Header setActive={setActive}/>
      <DisplayDays 
        days={days}
        startingPoint={startingPoint}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <DisplayTime 
        days={days}
        notes={notes}
        delUnix={delUnix}
        setDelUnix={setDelUnix}
      />
      </div>
      <Footer 
        setStartingPoint={setStartingPoint}
        delUnix={delUnix}
        notes={notes}
        setNotes={setNotes}
        setDelUnix={setDelUnix}
      />
      <Popup 
        active={active} 
        setActive={setActive}
        notes={notes}
        setNotes={setNotes}
      />
    </Wrapper>
  );
}

export default App;
