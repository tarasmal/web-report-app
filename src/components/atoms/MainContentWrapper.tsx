import styled from "styled-components";
import { Item } from "../../types";
import TextBlock from "../molecules/TextBlock";
import LogoBlock from "../molecules/LogoBlock";

interface MainContentWrapper {
  content: Item[]
}

const StyledMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: fit-content;
`

const getMainContent = (content: Item[]) => {
  const mainContent: JSX.Element[] = []

  const _getMainContent = (content: Item[]) => {
    content.forEach((item) => {
      mainContent.push(<h1><span className="anchor" id={item.header}></span>{item.header}</h1>)
      item.content?.forEach((elem) => {
        mainContent.push(elem.type === 'text' ?
        <TextBlock>{elem.data}</TextBlock> : elem.type === 'img' ?
        <LogoBlock src={elem.data}/> : elem.type === 'code' ?
        <pre><code>{elem.data}</code></pre> : <TextBlock textColor={'red'} >Incorrect type</TextBlock>)
      })
      if(item.subcontent) _getMainContent(item.subcontent)
    })
  }

  _getMainContent(content)
  return mainContent
}

const MainContentWrapper = (
  {
    content
  }: MainContentWrapper
) => {
  return (
    <StyledMainContentWrapper>
      {
        getMainContent(content)
      }
    </StyledMainContentWrapper>
  );
};

export default MainContentWrapper
