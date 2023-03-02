import styled from "styled-components"
import { Cards } from "./Cards";

import Play from "./assets/seta_play.png";
import Turn from "./assets/seta_virar.png";
import OK from "./assets/icone_certo.png";
import Almost from "./assets/icone_quase.png";
import Wrong from "./assets/icone_erro.png";
import { useState } from 'react';

const StateAnswer = [  
                    Play,
                    Turn,
                    OK,             
                    Almost,
                    Wrong         
                    ];

export default function Questions(props){
    const {turn, setTurn, verify, setVerify, sequence, setSequence, respostas, setRespostas} = props;

    const [forgots, setForgots] = useState([]);
    const [almosts, setAlmosts] = useState([]);
    const [remembers, setRemembers] = useState([]);

    // console.log(situation)
    function TurnCard(index){
        const virados = [...turn];
        setTurn([...virados, index]);
    }

    function ShowAnswer(index){
        if(turn.includes(index.question)){
            const verResposta = [...verify];
            setVerify([...verResposta, index.answer]);
        }
    }

    function SetOrder(image){
        const cont = respostas + 1;
        if(cont <= Cards.length) {
            const images = [...sequence];
            setSequence([...images, image])
        }
    }

    function AddResponse(){
        const cont = respostas + 1;
        if(cont <= Cards.length) setRespostas(cont);
    }

    function AddForgots(str){
        const listF = [...forgots];
        if(!listF.includes(str)) {
            setForgots([...listF, str])
            SetOrder(Wrong);
            AddResponse(); 
        }
    }
    console.log(forgots);

    function AddAlmost(str){
        const listA = [...almosts];
        if(!listA.includes(str)) {
            setAlmosts([...listA, str])
            SetOrder(Almost);
            AddResponse(); 
        }
    }
    console.log(almosts);

    function AddRemember(str){
        const listR = [...remembers];
        if(!listR.includes(str)) {
            setRemembers([...listR, str]);
            SetOrder(OK);
            AddResponse(); 
        }
    }
    console.log(remembers);

    return(
        <Main>
            <Lista>
                {Cards.map((card, index) => 
                <Item   key={card.question} >
                        {
                        turn.includes(card.question) ? 
                            verify.includes(card.answer) ? 
                                forgots.includes(card.answer) ? 
                                    almosts.includes(card.answer) ? 
                                        remembers.includes(card.answer) ? 
                                            <RememberAnswer>
                                                {"Pergunta " + (index+1)}
                                                <Icon src={StateAnswer[2]}/>
                                            </RememberAnswer>
                                        : 
                                        <AlmostAnswer>
                                            {"Pergunta " + (index+1)}
                                            <Icon src={StateAnswer[3]}/>
                                        </AlmostAnswer>
                                    :
                                    <ForgotAnswer>
                                        {"Pergunta " + (index+1)}
                                        <Icon src={StateAnswer[4]}/>
                                    </ForgotAnswer>
                                :
                                <Answer>
                                    {card.answer} 
                                    <Buttons>
                                        <ForgotBtn onClick={() => {
                                            AddForgots(card.answer);
                                            }} >Não Lembrei</ForgotBtn>
                                        <AlmostBtn onClick={() => {
                                            AddAlmost(card.answer);
                                            }} >Quase não Lembrei</AlmostBtn>
                                        <RememberBtn onClick={() => {
                                            AddRemember(card.answer);
                                            }} >Zap!</RememberBtn>
                                    </Buttons>
                                </Answer>
                            : 
                            <QuestTurn>
                            {card.question}
                            <Icon   src={StateAnswer[1]} 
                                    onClick={() => {
                                        ShowAnswer(card);
                                        TurnCard(card.question);
                                    }} />
                            </QuestTurn>
                        : 
                        <Quest>
                            {"Pergunta " + (index+1)}
                            <Icon   src={StateAnswer[0]} 
                                    onClick={() => {
                                        ShowAnswer(card);
                                        TurnCard(card.question);
                                    }} />
                        </Quest>
                                    
                    }
                </Item>
                )}
            </Lista>
        </Main>
    )
}

const Main = styled.section`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    width: 375px;
    min-height: 605px;
    height: auto;
    margin: 0 auto 70px auto;
    padding: 25px 0;
`

const Lista = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    font-family: 'Recursive', sans-serif;
    font-weight: 700;

    width: 300px;
    height: auto;
    box-sizing: border-box;

    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`

const Quest = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
`

const QuestTurn = styled(Quest)`
    background-color: #FFFFD4;
`

const Answer = styled(Quest)`
    flex-direction: column;
    background-color: #FFFFD4;
`
const Answered = styled(Quest)`
    background-color: #FFFFFF;
    text-decoration: line-through;
`
const ForgotAnswer = styled(Answered)`
    color: #FF3030;
`
const AlmostAnswer = styled(Answered)`
    color: #FF922E;
`
const RememberAnswer = styled(Answered)`
    color: #2FBE34;
`

export const Icon = styled.img`
    display: flex;
    width: 20px;
`
const Button = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    border: none;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    color: #FFFFFF;
`

const Buttons = styled.div`
    display: flex;
    margin: 22px auto 0 auto;
    gap: 10px;
`

const ForgotBtn = styled(Button)`
    background-color: #FF3030;
`
const AlmostBtn = styled(Button)`
    background-color: #FF922E;
`
const RememberBtn = styled(Button)`
    background-color: #2FBE34;
`

