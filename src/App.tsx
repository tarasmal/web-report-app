import React, {useMemo} from 'react';
import NavigationBar from "./components/organisms/NavigationBar";
import Flex from "./components/atoms/Flex";

function App() {
  // @ts-ignore
  const titles = useMemo(() => [...Array(9).keys()].map((_, index) => `Лабораторна робота №${index + 1}`),[])
  return (
    <Flex
    >
      <NavigationBar  titles={titles}/>
    </Flex>
  );
}

export default App;
