import styled from "styled-components";

interface Flex {
    position?: string,
    flexDirection?: string,
    justifyContent?: string,
    alignItems?: string,
    alignSelf?: string,
    justifySelf?: string,
    width?: string,
    height?: string,
    margin?: string,
    padding?: string,
    marginRight?: string,
    marginLeft?: string,
    rowGap?: string,
    columnGap?: string,

}

const Flex = styled.div<Flex>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  position: ${props => props.position};
  margin-right: ${props => props.marginRight};
  margin-left: ${props => props.marginLeft};
  row-gap: ${props => props.rowGap};
  column-gap: ${props => props.columnGap};
`


export default Flex;
