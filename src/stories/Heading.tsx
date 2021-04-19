import React from 'react' 
import styled from 'styled-components';

// the interface needs to explicitly declare which strings are safe to pass
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

 const TsHeading = ({
  headingLevel,
  children,
  className,
}: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children)

  return <Heading className={className}>{children}</Heading>
}


export const Heading = styled(({ color, textAlign,fontSize,width, ...rest }) => <TsHeading {...rest} />)<{
  color?: string,
  textAlign?:string,
  fontSize?:string,
  marginTop?:string,
  marginBottom?:string,
  marginLeft?:string,
  marginRight?:string,
  width?:string;
  margin?:string;

}>`
  color: ${props => props.color};
  width: ${props => props.width};
  text-align:${props => props.textAlign};
  font-size: ${props => props.fontSize};
  margin:${props => props.margin};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRingt};

`;