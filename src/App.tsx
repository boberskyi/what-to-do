import React from 'react';
import './App.css';
import styled from "styled-components";
import {Events} from "./components/events/Events";

const App = () => {
  return (
    <div className="App">
        <ContainerStyled>
          <Events/>
        </ContainerStyled>
    </div>
  );
}

const ContainerStyled = styled.div`
  
`

export default App;
