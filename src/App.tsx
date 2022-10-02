import React, {useMemo} from 'react';
import NavigationBar from "./components/organisms/NavigationBar";
import Flex from "./components/atoms/Flex";
import Credentials from "./components/molecules/Credentials";


function App() {
  // @ts-ignore
  const titles = useMemo(() => [...Array(9).keys()].map((_, index) => `Лабораторна робота №${index + 1}`),[])
  return (
    <Flex
      flexDirection={'column'}
      rowGap={'20px'}
    >
      <Credentials title={'Cтудент групи ІС-13 Малярчук Тарас Васильович'} photo={'/avatar.jpg'} />
      <NavigationBar  titles={titles}/>
    </Flex>
  );
}

export default App;
