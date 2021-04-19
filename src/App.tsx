import React from 'react';

import './App.css';

import { Flex } from './stories/Flex';
import { Heading } from './stories/Heading';
import { Test } from './stories/Test';
import {Wrapp} from './stories/Wrapp'







function App() {
  
  return (
    <div className="App">
     

<Flex bgColor={"red"} justify={'center'}className="flex-container">
  <div>1</div>
  <div>2</div>
  <div>2</div>
  <div>3</div>
</Flex>
<Wrapp   width="350px" borderColor="red" borderRadius="5px" center={true}>
<Heading headingLevel="h5" color="magenta" fontSize="26px" marginTop="2em" >{'Naslov'}</Heading>
</Wrapp>

<Test width={"50%"}>
  test div
</Test>

    </div>
  );
}

export default App;
