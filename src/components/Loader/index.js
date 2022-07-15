import React from 'react'
import styled from 'styled-components'

export default function Loader() {
  return (
    <LoaderStyle>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyle>
  )
}


const LoaderStyle = styled.div`
  display: grid;
  place-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.75);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 300;

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;