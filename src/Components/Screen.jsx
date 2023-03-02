import styled from "styled-components";
import Logo from "./assets/logo.png";
import Questions from "./Questions";
import { Cards } from "./Cards";
import { Icon } from "./Questions";
import { useState } from 'react';

export default function Screen(props){
    const {turn, setTurn, verify, setVerify, sequence, setSequence} = props
    const [respostas, setRespostas] = useState(0);

    return(
        <Section>
            <Header>
                <ImageLogo src={Logo} alt=""/>
                <TextLogo>ZapRecall</TextLogo>
            </Header>
            <Questions  turn={turn} 
                        setTurn={setTurn} 
                        verify={verify}
                        setVerify={setVerify}
                        sequence={sequence}
                        setSequence={setSequence}
                        respostas={respostas}
                        setRespostas={setRespostas}
                        />
            <BottonBar>
                <h4>{respostas}/{Cards.length} Concluídos</h4>
                <Order>
                    {sequence.map((image) => 
                        <Icon src={image} />
                    )}
                </Order>
            </BottonBar>
        </Section>
    )
}

const Section = styled.section`
    background-color: #FB6B6B;
    width: 375px;
    height: auto;
    margin: auto;
`;

const Header = styled.div`
    display: flex;
    width: 300px;
    background-color: transparent;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    padding-top: 48px;
`;

const ImageLogo = styled.img`
    width: 52px;
    height: 60px;
`;

const TextLogo = styled.h2`
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: #FFFFFF;
`;

const BottonBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px auto 0 auto;
    padding-bottom: 10px;
    box-sizing: border-box;

    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;

    width: 375px;
    height: 70px;
    font-family: 'Recursive', sans-serif;
    font-weight: 700;

    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;

const Order = styled.div`
    display: flex;
    margin-top: 5px;
`

