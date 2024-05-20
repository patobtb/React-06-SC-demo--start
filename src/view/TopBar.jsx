import React from "react";
import styled, {keyframes} from "styled-components";
import {lighten, darken} from "polished"


const first = "skyblue";
const second = "lime";
const third = "yellow";

const TopBar =  ({ children }) => (
  <Div className="top-bar">
    <h1>{children}</h1>
    <img className="logo" src="icons/logo.svg" alt="logo" />
    <Button color={first}>Click me</Button>
    <Btn color={second}>Click me</Btn>
    <Button color={third}>Click me</Button>
    <Btn>Click me</Btn>
  </Div>
);
export default TopBar;


const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Div = styled.div`
  background: slategray;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  h1{
    font-size: 3rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    color: papayawhip;
  }

  img.logo{
    height: 5rem;
    animation: ${spin} 2s linear infinite;
  }
`;

const Button = styled.button`
  outline-style: none;
  border-style: none;
  background: ${(props) => props.color || "orange"};
  text-transform: uppercase;
  color: white;
  font-size: 2.8rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: "Yanone Kaffeesatz", sans-serif;

  &:hover {
    background: ${({color}) => lighten(0.1, color|| "orange")};
  }
  &:active {
    background: ${({color}) => darken(0.1, color || "orange")};
  }
`;

const Btn = styled(Button)`
  border-radius: 0px;
  border: 2px solid white;
  background: ${(props) => props.color};
`;
