import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import Styled from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';

import Location from '~/CurrentLocation';
// import Location from '~/WatchLocation';

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  }, []);
  return (
    <Container>
      <Location />
    </Container>
  );
};

export default App;
