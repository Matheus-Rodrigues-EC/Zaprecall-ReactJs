// import { useState } from "react";
import styled from "styled-components"
import Logo from "./assets/logo.png";

export default function Welcome(props){

    const {showWelcome, setShowWelcome, setShowScreen} = props;

    function PlayRecall(){
        console.log("Iniciar!");
        setShowWelcome("none");
        setShowScreen("block")
    }

    return(
        <Section showWelcome={showWelcome}>
            <Image src={Logo} alt=""/>
            <Title>ZapRecall</Title>
            <Button onClick={() => {PlayRecall()}} data-test="start-btn" >Iniciar Recall!</Button>
        </Section>
    )
}


const Section = styled.section`
    display: ${props => props.showWelcome};
    background-color: #FB6B6B;
    width: 375px;
    height: 667px;
`

const Image = styled.img`
    display: flex;
    width: 136px;
    height: 161px;
    margin: auto;
    padding-top: 148px;
`

const Title = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: 400;
    color: white;
    text-align: center;
    margin-top: 15px;
`

const Button = styled.button`
    display: flex;
    font-family: 'Recursive', sans-serif;
    width: 246px;
    height: 54px;
    color: #D70900;
    font-weight: 400;
    font-size: 18px;

    align-items: center;
    justify-content: center;

    background: #FFFFFF;
    border: 1px solid #D70900;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    margin: 30px auto;
`