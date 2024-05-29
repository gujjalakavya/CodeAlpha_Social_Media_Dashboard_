import React from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeContext';

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 10px;
  right: 20px;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px; /* Add margin between switch and labels */
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + .slider {
    background-color: #2196F3;
  }
  &:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

const LightLabel = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  margin-right: 5px;
`;

const DarkLabel = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  margin-right: 5px;
`;

const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <SwitchContainer>
      <LightLabel>Light</LightLabel>
      <SwitchLabel>
        <SwitchInput type="checkbox" checked={isDarkMode} onChange={handleThemeToggle} />
        <Slider className="slider" />
      </SwitchLabel>
      <DarkLabel>Dark</DarkLabel>
    </SwitchContainer>
  );
};

export default ThemeSwitch;
