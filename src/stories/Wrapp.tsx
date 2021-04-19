import React from "react";
import styled from "styled-components";

export interface Props {
  bgColor?: string;
  maxWidth?: string;
  width: string;
  height?: string;
  children?: any;
  center?: boolean;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  bgImage?: string;
  bgPosition?: string;
  padding?: string;
}
const Component = styled.div`
  background-color: ${(props: Props) => props.bgColor};
  width: ${(props: Props) => props.width};
  height: ${(props: Props) => props.height};
  max-width: ${(props: Props) => props.maxWidth};
  text-align: ${(props: Props) => (props.center ? "center" : "left")};
  border: 1px solid black;
  border-width: ${(props: Props) => props.borderWidth};
  border-color: ${(props: Props) => props.borderColor};
  border-radius: ${(props: Props) => props.borderRadius};
  padding: ${(props: Props) => props.padding};
  background-image: ${(props) => `url('${props.bgImage}')`};
  background-position: ${(props) => props.bgPosition};
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
`;

export const Wrapp = ({ children, ...props }: Props) => {
  return <Component {...props}>{children}</Component>;
};
