import React from "react";

import logo from "./images/logo.png";
import { Flex } from "./stories/Flex";
import { Heading } from "./stories/Heading";
import { Wrapp } from "./stories/Wrapp";

function App() {
  return (
    <div className="App">
      <Flex
        width="100%"
        direction="row"
        justify="center"
        align="center"
        minHeight="80vh"
      >
        <Wrapp
          width="600px"
          bgColor="rgba(0,139,139, 0.3)"
          borderColor="darkcyan"
          borderWidth="3px"
          borderRadius="5px"
          center={true}
          padding="10px 0 10px 0"
        >
          <Wrapp
            width="100px"
            height="100px"
            borderRadius="50%"
            bgImage={logo}
            bgPosition="center"
            borderColor="transparent"
          ></Wrapp>

          <Heading headingLevel="h1" color="#262626">
            Task No 1 : Build system
          </Heading>
          <Heading headingLevel="h3" color="#262626">
            To see the storybook in projects root folder run command:{" "}
          </Heading>
          <Heading headingLevel="p" color="#262626">
            npm run storybook{" "}
          </Heading>
        </Wrapp>
      </Flex>
    </div>
  );
}

export default App;
