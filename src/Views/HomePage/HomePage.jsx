import React from 'react';
import {
  Container
} from './styles/style';
import TopSection from './aggregates/TopSection/TopSection';
import BottomSection from './aggregates/BottomSection/BottomSection';

const HomePage = function () {
  return (
    <Container>
        <TopSection />
      <BottomSection />
    </Container>
  )
};
export default HomePage;

