import React from 'react'
import styled from 'styled-components';
import { device } from '../styles/devices'


export interface Props {
  bgColor?:string,
  direction?:"row" | "column",
  justify?:string,
  align?:string,
  wrap?:boolean,
  className?:string,
  width?:string,
  minHeight?:string,
  children:any
}
const Component = styled.div`
  background-color: ${(props: Props)=>props.bgColor};
  display:flex;
  flex-direction:${(props: Props)=>props.direction};
 justify-content:${(props: Props)=>props.justify};
  align-items:${(props: Props)=>props.align};
  flex-wrap:${(props: Props)=>props.wrap ? "wrap" : "nowrap"};
  width: ${(props: Props)=>props.width ? props.width : "90%"};
  min-height:${(props: Props)=>props.minHeight};
  margin:0 auto;
  @media ${device.mobileL} {
      flex-direction: column;
    }
  
`


export const Flex = ({ children, ...props}:Props) => {
  
  return <Component  {...props}>{children}</Component>
 };