import React from 'react';
import NavigationBar from "./components/organisms/NavigationBar";
import Flex from "./components/atoms/Flex";
import Credentials from "./components/organisms/Credentials";
import content from './content.json'
import './styles.css'

function App() {
  console.log(content)
  return (
    <Flex
      flexDirection={'column'}
      rowGap={'20px'}
    >
      <Credentials title={'Cтудент групи ІС-13 Малярчук Тарас Васильович'} photo={'/avatar.jpg'} />
      <NavigationBar titles={Object.keys(content)}/>

    </Flex>
  );
}

export default App;
