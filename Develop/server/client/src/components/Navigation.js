import React from 'react'
import styled from 'styled-components'

export const Navbar = styled.div`      
    background-color: blue;
`;

export const Content = styled.div`
    background-color: white;
`;

function Navigation(props) {
  return <div>
    <Navbar>
      <a href='http://localhost:3000/'>Home</a>
      <a href='http://localhost:3000/cart'>Cart</a>
    </Navbar>
    <Content>
      {props.children}
    </Content>
  </div>
}

export default Navigation