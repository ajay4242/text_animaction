import React from 'react'
import styled ,{keyframes} from "styled-components"
import TextAnimation from './TextAnimation'

function App() {
  return (
    <div>
      
        <Title>
        Design
        <br/> and code <TextAnimation /> App
        </Title>
      
    </div>
  )
}
 

const Title=styled.h1`
color: white ;
background: linear-gradient(180deg,#730040 0%,#301cbe 100%);
background-clip: text ;
cplor:transparent;

span{
  background:linear-gradient(180deg, #ffd7ff 0%,#ffb6ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
 
}
@media (max-width:450px){
  font-size:48px;
}`
export default App

