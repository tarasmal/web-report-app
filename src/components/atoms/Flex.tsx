import styled from "styled-components";

interface Flex {
    id?: string,
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
    marginTop?: string,
    marginBottom?: string,
    rowGap?: string,
    columnGap?: string,
    overflow?: string,
    top?: string,
    zIndex?: string,
    backgroundColor?: string,

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
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  row-gap: ${props => props.rowGap};
  column-gap: ${props => props.columnGap};
  overflow: ${props => props.overflow};
  top: ${props => props.top};
  z-index: ${props => props.zIndex};
  background-color: ${props => props.backgroundColor};
`


export default Flex;
