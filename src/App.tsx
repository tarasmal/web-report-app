import React from 'react';
import NavigationBar from "./components/organisms/NavigationBar";
import Flex from "./components/atoms/Flex";
import Credentials from "./components/organisms/Credentials";
import content from './content.json'
import './styles.css'
import HeaderWrapper from "./components/atoms/HeaderWrapper";
import MainContentWrapper from "./components/atoms/MainContentWrapper";


function App() {
  return (
    <Flex
      flexDirection={'column'}
      height={'100vh'}
    >
      <HeaderWrapper>
        <Credentials title={'Cтудент групи ІС-13 Малярчук Тарас Васильович'} photo={'/avatar.jpg'} />
        <NavigationBar titles={Object.keys(content)}/>
      </HeaderWrapper>
      <MainContentWrapper>
        sdsd
      </MainContentWrapper>
    </Flex>
  );
}

export default App;
