import React from 'react'
import styled from 'styled-components'

export const Navbar = styled.div`      
    background-color: blue;
`;

export const Content = styled.p`
    font-size: 30px;
    padding: 20px;
    margin-left: 20px;
`;

function Navigation(props) {
  return <div>
    <Navbar>
      <Content>
      <a href='http://localhost:3000/'>Home</a>
      <a href='http://localhost:3000/cart'>Cart</a>
      </Content>
    </Navbar>
  </div>
}

export default Navigation