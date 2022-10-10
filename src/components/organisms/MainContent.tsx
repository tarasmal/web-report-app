import styled from "styled-components";
import { Item } from "../../types";
import TextBlock from "../molecules/TextBlock";
import ImgBlock from "../molecules/ImgBlock";
import CodeBlock from "../molecules/CodeBlock"
import HeaderBlock from "../molecules/HeaderBlock";

interface MainContentWrapper {
  content: Item[]
}

const StyledMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-bottom: 30px;
`

const getMainContent = (content: Item[]) => {
  const mainContent: JSX.Element[] = []

  const _getMainContent = (content: Item[], nestedLevel: number) => {
    content.forEach((item, index) => {
      mainContent.push(<HeaderBlock nestedLevel={nestedLevel} anchor={`l${nestedLevel + 1}-n${index + 1}-${item.header}`}>{item.header}</HeaderBlock>)

      item.content?.forEach((block) => {
        switch (block.type) {
          case 'text':
            mainContent.push(<TextBlock>{block.data}</TextBlock>)
            break;
          case 'img':
            mainContent.push(<ImgBlock src={block.data}/>)
            break;
          case 'code':
            mainContent.push(<CodeBlock>{block.data}</CodeBlock>)
            break;
          default:
            mainContent.push(<TextBlock textColor={'red'}>Incorrect type</TextBlock>)
            break;
        }
      })
      
      if(item.subcontent) _getMainContent(item.subcontent, nestedLevel + 1)
    })
  }

  _getMainContent(content, 0)
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
