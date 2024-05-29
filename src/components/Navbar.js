import React from 'react';
import styled from 'styled-components';
import ThemeSwitch from './ThemeSwitch';

const Container = styled.div`
  height: 60px;
  background-color: #1976D2;
  display: flex;
  align-items: center;
  justify-content: space-evally;
  padding: 0 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  
`;

const Navbar = () => {
  // Dummy user data
  const user = {
    name: "Kavya Gujjala",
    avatar: "https://res.cloudinary.com/dhscilqq8/image/upload/v1711873916/Rectangle_4_svxtsa.svg"
  };

  return (
    <Container>
      <Logo>Dashboard</Logo>
      <ThemeSwitch />
      <User>
        <Avatar src={user.avatar} alt="User Avatar" />
        <UserName>{user.name}</UserName>
      </User>
    </Container>
  );
};

export default Navbar;