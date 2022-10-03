import React from 'react';
import NavigationBar from "./components/organisms/NavigationBar";
import Flex from "./components/atoms/Flex";
import Credentials from "./components/organisms/Credentials";
import content from './content.json'
import './styles.css'
import HeaderWrapper from "./components/atoms/HeaderWrapper";
import MainContentWrapper from "./components/atoms/MainContentWrapper";
import Sidebar from "./components/organisms/Sidebar";


function App() {
  return (
    <Flex
      flexDirection={'column'}
      rowGap={'50px'}
      height={'100vh'}
    >
      <HeaderWrapper>
        <Credentials title={'Cтудент групи ІС-13 Малярчук Тарас Васильович'} photo={'/avatar.jpg'} />
        <NavigationBar titles={Object.keys(content)}/>

      </HeaderWrapper>
      <Flex padding={'25px'}>
        <Sidebar content={[
          {header: 'kek'}
        ]} />
        <MainContentWrapper>
          sdsd
        </MainContentWrapper>
      </Flex>

    </Flex>
  );
}

export default App;
