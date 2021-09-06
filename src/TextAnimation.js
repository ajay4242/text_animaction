import React, { useState,useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import  { useInterval} from 'react-use'

function TextAnimation() {
    const arr1 ="personal".split("");
    const arr2 ="office".split("");
    //const bussinesArray ="bussines".split("");
     const [item , setItems]=useState(arr1);
     const [count, setCount]=useState(0);
     const [play, setPlay]=useState(false);

     useInterval(
         ()=>{
             setItems(arr1)
             setCount(count+1)
             if(count===1){
                 setCount(0)
                setItems(arr2)
             }
            //  if (count===2) {
            //     setItems(officeArray)
            //     setCount(0)
            //  }
            },
            play ? 6000:null
     )
     useEffect(() => {
         const timer=setTimeout(() => {
            //animate bussnice after timeout
            setItems(arr2);
            setPlay(true);

         }, 4000);
         return () => {
             clearTimeout(timer)
         }
     }, [])
    return (
        <Wrapper>
            {item.map((item,index)=>(
                <span key={index}>{item}</span>
            ))}
        </Wrapper>
    )
}

const animation = keyframes`
0% {opacity:0; transform: translateY(-100px) skewY(10deg) xkewX(10deg) rotateZ(30deg); filter:blur(10px);}
25% {opacity:1; transform: translateY(0px) skewY(0deg) xkewX(0deg) rotateZ(0deg); filter:blur(0px);}
75% {opacity:1; transform: translateY(0px) skewY(0deg) xkewX(0deg) rotateZ(0deg); filter:blur(0px);}
100% {opacity:0; transform: translateY(-100px) skewY(10deg) xkewX(10deg) rotateZ(30deg); filter:blur(10px);}`
const Wrapper =styled.span`
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
`
export default TextAnimation
