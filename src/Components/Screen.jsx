import styled from "styled-components";
import Logo from "./assets/logo.png";
import Questions from "./Questions";
import { Cards } from "./Cards";
import { Icon } from "./Questions";
import { useState } from 'react';
import OK from "./assets/icone_certo.png";
import Almost from "./assets/icone_quase.png";
import Wrong from "./assets/icone_erro.png";
import Party from "./assets/party.png";
import Sad from "./assets/sad.png";

export default function Screen(props){
    const {turn, setTurn, verify, setVerify, sequence, setSequence, showScreen} = props
    const [respostas, setRespostas] = useState(0);
    const [show, setShow] = useState('none');

    function verifyFinish(){
        if((sequence.length + 1) === Cards.length) setShow('flex')
        console.log(show);
    }

    return(
        <Section showScreen={showScreen} >
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
                        verifyFinish={verifyFinish}
                        />
            <BottonBar data-test="footer">
                <Finish show={show} data-test="finish-text">
                    {sequence.includes(Wrong) ? (
                        <>
                        <Title>
                            <Icon src={Sad}/>
                            <h1>Putz...</h1>
                        </Title>
                        <Message>Ainda faltam alguns... Mas não desanime!</Message>
                        </>
                        
                    ) : (
                        <>
                        <Title>
                            <Icon src={Party}/>
                            <h1>Parabéns!</h1>
                        </Title>
                        <Message>Você não esqueceu de nenhum flashcard!</Message>
                        </>
                    )
                }
                </Finish>
                <h4>{respostas}/{Cards.length} Concluídos</h4>
                <Order>
                    {sequence.map((image, index) => 
                        sequence.includes(OK) ? (
                            <Icon key={index} src={image} data-test="zap-icon"  />
                        ) : sequence.includes(Almost) ? (
                            <Icon key={index} src={image} data-test="partial-icon" />
                        ) : sequence.includes(Wrong) ? (
                            <Icon key={index} src={image} data-test="no-icon" />
                        ) : null
                        
                    )}
                </Order>
            </BottonBar>
        </Section>
    )
}

const Section = styled.section`
    display: ${props => props.showScreen};
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
    padding-top: 35px;
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
    margin: 0 auto 0 auto;
    min-height: 70px;
    padding: 25px;
    box-sizing: border-box;

    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;

    width: 375px;
    height: auto;
    font-family: 'Recursive', sans-serif;
    font-weight: 700;

    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;

const Order = styled.div`
    display: flex;
    margin-top: 5px;
`
const Finish = styled.div`
    display: ${props => props.show};
    flex-direction: column;
    width: 270px;
    height: 85px;
    margin: auto;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    width: 125px;
`

const Message = styled.p`
    text-align: center;
    margin-bottom: 15px;
`