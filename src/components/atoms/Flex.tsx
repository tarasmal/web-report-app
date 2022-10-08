import styled from "styled-components";

interface Flex {
    id?: string,
    position?: string,
    flex?: string,
    flexGrow?: number,
    flexShrink?: number,
    flexBasis?: string,
    flexDirection?: string,
    justifyContent?: string,
    alignItems?: string,
    alignSelf?: string,
    justifySelf?: string,
    width?: string,
    minWidth?: string,
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
    borderRadius?: string,
}

const Flex = styled.div<Flex>`
  display: flex;
  flex: ${props => props.flex};
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
  flex-basis: ${props => props.flexBasis};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
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
  border-radius: ${props => props.borderRadius}
`


export default Flex;
