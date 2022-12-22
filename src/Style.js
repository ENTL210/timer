import styled from "styled-components";

const Container = styled.div`
    background: rgb(242,170,76, 1);
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: max-content;
`

const HeaderS = styled.div`
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
    background: rgb(16,24,32,1);
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
`

const Title = styled.h1`
    font-family: Karla-Bold;
    font-size: 35px;
    opacity: 1.0;
    color: white;
`

const Image = styled.img`
    width: 50px
`

const TimerContainer = styled.div`
    grid-column: 2 / 4; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 25px;
`

const TimerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
`

const Hours = styled.div`
    background: rgb(16,24,32,0.6);
    border-radius: 10px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Mins = styled.div`
    background: rgb(16,24,32,0.6);
    border-radius: 10px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Seconds = styled.div`
    background: rgb(16,24,32,0.6);
    border-radius: 10px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const TimeText = styled.h1`
    font-family: Karla;
    font-size: 80px;
    color: white;
    padding: 0px;
    margin: 0px;
`

const DescriptionText = styled.h1`
    font-family: Karla;
    font-size: 15px;
    color: white;
    padding: 0px;
    margin: 0px;
`

const TimeBtn = styled.button`
    font-family: Karla;
    font-size: 30px;
    color: ${props => props.disabled ? "gray" : "white"};
    border: none;
    background: none;
    cursor: pointer;
    margin: 0px;
    padding: 0px;
    &: hover {
        color: rgb(16,24,32,1)
    }
`

const ControlBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    padding: 10px;
`

const ControlBtn = styled.button`
    padding: 10px;
    width: 200px;
    height: 75px;
    border-radius: 10px;
    background: rgb(16,24,32,0.6);
    font-family: Karla-Bold;
    font-size: 25px;
    color: white;
    &: hover {
        color: ${props => props.job == "start" ? "#97F25A" : "#F2674B"}
    }
`




export {
    Container, 
    HeaderS, 
    Title, 
    Image, 
    TimerContainer,
    TimerWrapper, 
    Hours, 
    Mins, 
    Seconds, 
    TimeText, 
    TimeBtn, 
    DescriptionText,
    ControlBtnWrapper,
    ControlBtn,
}