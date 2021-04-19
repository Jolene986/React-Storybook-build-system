import React from 'react'
import styled from 'styled-components';


export interface Props  {
  bgColor?:string,
  maxWidth?:string,
  width:string,
  height?:string,
  children:any
  center?:boolean,
  borderW?:string,
  borderColor?:string,
  borderWidth?:string,
  borderRadius?:string
}
const Component = styled.div`
  background-color: ${(props: Props)=>props.bgColor};
  width:${(props: Props)=>props.width};
  height:${(props: Props)=>props.height};
  max-width:${(props: Props)=>props.maxWidth};
  text-align:${(props: Props)=>props.center ? "center" : "left"};
  border:1px solid black;
  border-width: ${(props: Props)=>props.borderWidth};
  border-color: ${(props: Props)=>props.borderColor};
  border-radius:${(props: Props)=>props.borderRadius};
  margin:0 auto;
  
  
  
   
`


export const Test = ({ children, ...props}:Props) => {
  
  return <Component  {...props}>{children}</Component>
 };