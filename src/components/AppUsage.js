import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { appUsageData } from '../data/dummyData';
import { useTheme } from './ThemeContext';

const Container = styled.div`
  flex: 2;
  padding: 20px;
  background-color: ${(props) => (props.isDarkMode ? '#333' : '#fff')};
  color: ${(props) => (props.isDarkMode ? '#fff' : '#333')};
`;

const AppCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  ${(props) =>
    props.isDarkMode &&
    css`
      background-color: #444;
      border-color: #555;
      color: #fff;
      &:hover {
        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
      }
    `}
`;

const AppLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

const AppInfo = styled.div`
  flex: 1;
`;

const AppName = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;

const UsageTime = styled.div`
  margin: 5px 0;
`;

const Description = styled.div`
  font-style: italic;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => (props.isDarkMode ? '#333' : '#fff')};
  color: ${(props) => (props.isDarkMode ? '#fff' : '#333')};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 80%;
  text-align: center;
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
  button {
    background-color: ${(props) => (props.isDarkMode ? '#444' : '#1976D2')};
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${(props) => (props.isDarkMode ? '#555' : '#1565c0')};
    }
  }
`;


const AppUsage = () => {
  const { isDarkMode } = useTheme();
  const [selectedApp, setSelectedApp] = useState(null);

  const handleAppClick = (app) => {
    setSelectedApp(app);
  };

  const handleClosePopup = () => {
    setSelectedApp(null);
  };

  return (
    <Container isDarkMode={isDarkMode}>
      <h2>App Usage</h2>
      {appUsageData.map((app) => (
        <AppCard key={app.id} onClick={() => handleAppClick(app)} isDarkMode={isDarkMode}>
          <AppLogo src={app.logo} alt={app.app} />
          <AppInfo>
            <AppName>{app.app}</AppName>
            <UsageTime>Usage Time: {app.usageTime}</UsageTime>
            <Description>{app.description}</Description>
          </AppInfo>
        </AppCard>
      ))}
      {selectedApp && (
        <Popup>
          <h2>{selectedApp.app}</h2>
          <UsageTime>Usage Time: {selectedApp.usageTime}</UsageTime>
          <Description>{selectedApp.description}</Description>
          <button onClick={handleClosePopup}>Close</button>
        </Popup>
      )}
    </Container>
  );
};

export default AppUsage;