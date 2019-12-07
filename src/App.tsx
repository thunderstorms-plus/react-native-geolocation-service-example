import React from 'react';
import Styled from 'styled-components/native';
import Location from '~/CurrentLocation';
// import Location from '~/WatchLocation';

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Location />
    </Container>
  );
};

export default App;
