import React, {useState} from 'react';

import NavigationBar from "./components/organisms/NavigationBar";
import Flex from "./components/atoms/Flex";
import Credentials from "./components/organisms/Credentials";
import HeaderWrapper from "./components/atoms/HeaderWrapper";
import MainContent from "./components/organisms/MainContent";
import Sidebar from "./components/organisms/Sidebar";

import './styles.css'

import content from './content/content.json'


const LAB_NAMES = Object.keys(content.labs)
const LABS = Object.values(content.labs)


function App() {
  const [currLab, setCurrLab] = useState<number>(localStorage.currLab ? +localStorage.currLab : 0)

  return (
    <Flex
      flexDirection={'column'}
      height={'fit-content'}
    >
      <HeaderWrapper>
        <Credentials title={`Cтудент групи ${content.credentials.group_name} ${content.credentials.full_name}`}
                     photo={content.credentials.photo_path} />
        <NavigationBar setCurrentLab={setCurrLab} currLab={currLab} titles={LAB_NAMES}/>
      </HeaderWrapper>

      <Flex
          padding={'0px 25px'}
          columnGap={'30px'}
      >
        <Sidebar content={LABS[currLab]} />
        <MainContent content={LABS[currLab]}/>
      </Flex>

    </Flex>
  );
}

export default App;
