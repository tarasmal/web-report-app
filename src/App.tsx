import React, { useState } from 'react';
import NavigationBar from "./components/organisms/NavigationBar";
import Flex from "./components/atoms/Flex";
import Credentials from "./components/organisms/Credentials";
import content from './content.json'
import './styles.css'
import HeaderWrapper from "./components/atoms/HeaderWrapper";
import MainContentWrapper from "./components/atoms/MainContentWrapper";
import Sidebar from "./components/organisms/Sidebar";


function App() {
  const [currLab, setCurrLab] = useState(Object.values(content.labs)[0])
  
  return (
    <Flex
      flexDirection={'column'}
      rowGap={'40px'}
      height={'fit-content'}
    >
      <HeaderWrapper>
        <Credentials title={`Cтудент групи ${content.credentials.group_name} ${content.credentials.full_name}`}
                     photo={content.credentials.photo_path} />
        <NavigationBar titles={Object.keys(content.labs)}/>
      </HeaderWrapper>

      <Flex
          padding={'25px'}
          justifyContent={'space-between'}>
        <Sidebar content={currLab} />
        <MainContentWrapper content={currLab}/>
      </Flex>

    </Flex>
  );
}

export default App;
