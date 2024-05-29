import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import AppUsage from './AppUsage';


const Container = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 4;
  padding: 20px;
`;

// Dashboard component
const Dashboard = () => {
  return (
    <Container>
      <Main>
        <Navbar />
        <AppUsage />
      </Main>
    </Container>
  );
};

export default Dashboard;
