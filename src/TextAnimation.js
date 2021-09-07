import TextLoop from "react-text-loop";
import styled, { keyframes } from 'styled-components'
import React from 'react'



function TextAnimation(props) {
    let arr = []
    return (
        <TextLoop interval={6000}>
            {props.Text.map((item, index) => (
            <Wrapper key={index} >
                {item.split("").map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </Wrapper>))}
            </TextLoop>

    )
}

const animation = keyframes`
0% {opacity:0; transform: translateY(-100px) skewY(10deg) xkewX(10deg) rotateZ(30deg); filter:blur(10px);}
25% {opacity:1; transform: translateY(0px) skewY(0deg) xkewX(0deg) rotateZ(0deg); filter:blur(0px);}
75% {opacity:1; transform: translateY(0px) skewY(0deg) xkewX(0deg) rotateZ(0deg); filter:blur(0px);}
100% {opacity:0; transform: translateY(-100px) skewY(10deg) xkewX(10deg) rotateZ(30deg); filter:blur(10px);}`
const Wrapper = styled.span`
display:inline-block;
span{
    opacity:0;
animation-name: ${animation};
animation-duration: 6s;
animation-fill-mode:forwards;
animation-iteration-count: infinite;
animation-timing:cubic-bezier(0.075,0.82,o.165,1);
}
span:nth-child(1){
    animation-delay:0.1s;
}
span:nth-child(2){
    animation-delay:0.2s;
}
span:nth-child(3){
    animation-delay:0.3s;
}
span:nth-child(4){
    animation-delay:0.4s;
}
span:nth-child(5){
    animation-delay:0.5s;
}
span:nth-child(6){
    animation-delay:0.6s;
}
span:nth-child(7){
    animation-delay:0.7s;
}
span:nth-child(8){
    animation-delay:0.8s;
}
span:nth-child(9){
    animation-delay:0.9s;
}
`
export default TextAnimation
