import styled from "styled-components"
import { Cards } from "./Cards";

import Play from "./assets/seta_play.png";
import Turn from "./assets/seta_virar.png";
import OK from "./assets/icone_certo.png";
import Almost from "./assets/icone_quase.png";
import Wrong from "./assets/icone_erro.png";

const StateAnswer = [  
                    Play,
                    Turn,
                    OK,             
                    Almost,
                    Wrong         
                    ];

export default function Questions(props){
    const {turn, setTurn, verify, setVerify, sequence, setSequence, respostas, setRespostas} = props;
    // console.log(turn)
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
        if(cont < 9) {
            const images = [...sequence];
            setSequence([...images, image])
        }
    }

    function AddResponse(){
        const cont = respostas + 1;
        if(cont < 9) setRespostas(cont);
    }
    // console.log(turn);

    return(
        <Main>
            <Lista>
                {Cards.map((card, index) => 
                <Item   key={card.question} 
                        
                >
                    {turn.includes(card.question) ? 
                        verify.includes(card.answer) ? 
                        <Answer>
                            {card.answer} 
                            <Buttons>
                                <ForgotBtn onClick={() => {SetOrder(Wrong); AddResponse();}} >Não Lembrei</ForgotBtn>
                                <AlmostBtn onClick={() => {SetOrder(Almost); AddResponse();}} >Quase não Lembrei</AlmostBtn>
                                <RememberBtn onClick={() => {SetOrder(OK); AddResponse();}} >Zap!</RememberBtn>
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
    width: 100%;
    padding: 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
`

const QuestTurn = styled(Quest)`
    background-color: #FFFFD4;
`

const Answer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    background-color: #FFFFD4;
    border-radius: 5px;
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