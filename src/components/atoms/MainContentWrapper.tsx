import styled from "styled-components";
import { Item } from "../../types";

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
    content.forEach((item, _) => {
      mainContent.push(<h1><span className="anchor" id={item.header}></span>{item.header}</h1>)
      item.content?.forEach((elem, _) => {
        mainContent.push(elem.type === 'text' ? 
        <p>{elem.data}</p> : elem.type === 'img' ?
        <img src={elem.data} alt=""/> : elem.type === 'code' ?
        <pre><code>{elem.data}</code></pre> : <p>error</p>)
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
