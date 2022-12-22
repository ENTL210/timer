import {React, useState, useEffect} from "react";
import {
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
} from "../Style"


export default function Timer() {
    const [hours, setHours] = useState(1)
    const [mins, setMins] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [time, setTime] = useState(0)
    const [deadline, setDeadline] = useState(0)
    const [state, setState] = useState(false)

    function increaseHour() {
        if (hours === 23) {
            setHours(1)
        } else {
            setHours(currentHours => currentHours + 1)
        }
    }

    function increaseMin() {
        if (mins === 59) {
            setMins(0)
        } else {
            setMins(currentMins => currentMins + 1)
        }
    }

    function increaseSecond() {
        if (seconds === 59) {
            setSeconds(0)
        } else {
            setSeconds(currentSeconds => currentSeconds + 1)
        }
    }

    function decreaseHour() {
        if (hours === 0) {
            setHours(23)
        } else {
            setHours(currentHours => currentHours - 1)
        }
    }

    function decreaseMin() {
        if (mins === 0) {
            setMins(59)
        } else {
            setMins(currentMins => currentMins - 1)
        }
    }

    function decreaseSecond() {
        if (seconds === 0) {
            setSeconds(59)
        } else {
            setSeconds(currentSeconds => currentSeconds - 1)
        }
    }
    
    function start() {
        setState(true)
        const time = (hours * 3600000) + (mins * 60000) + (seconds * 1000) - 1 
        setDeadline(time)
    }     

    function stop() {
        setState(false)
        setDeadline(currentDeadline => currentDeadline + 1 )
    }

    function getTime() {
        setDeadline(currentDeadline => currentDeadline - 1000)

        setHours(Math.floor((deadline / (1000 * 60 * 60)) % 24));
        setMins(Math.floor((deadline / 1000 / 60) % 60));
        setSeconds(Math.floor((deadline / 1000) % 60));
        console.log(deadline);
    }


    useEffect(() => {
       if (deadline > 0 && state === true) {
            const interval = setInterval(() => getTime(), 1000);
            return () => clearInterval(interval);
       } else {
         setState(false)
       }
       
    }, [deadline]) 

    return (
        <TimerContainer>
            <TimerWrapper>
                <Hours>
                    <TimeBtn onClick={increaseHour} disabled={state ? true : false} >+</TimeBtn>
                    <TimeText>{hours < 10 ? "0" + hours : hours}</TimeText>
                    <TimeBtn onClick={decreaseHour} disabled={state ? true : false}>-</TimeBtn>
                    <DescriptionText>Hours</DescriptionText>
                </Hours> 
                <Mins>
                    <TimeBtn onClick={increaseMin} disabled={state ? true : false}>+</TimeBtn>
                    <TimeText>{mins < 10 ? "0" + mins : mins}</TimeText>
                    <TimeBtn onClick={decreaseMin} disabled={state ? true : false}>-</TimeBtn>
                    <DescriptionText>Mins</DescriptionText>
                </Mins>
                <Seconds>   
                    <TimeBtn onClick={increaseSecond} disabled={state ? true : false}>+</TimeBtn>
                    <TimeText>{seconds < 10 ? "0" + seconds: seconds}</TimeText>
                    <TimeBtn onClick={decreaseSecond} disabled={state ? true : false}>-</TimeBtn>
                    <DescriptionText>seconds</DescriptionText>
                </Seconds>
            </TimerWrapper>
            <ControlBtnWrapper>
                <ControlBtn job={"start"} onClick={start}>Start</ControlBtn>
                <ControlBtn job={"stop"} onClick={stop}>Stop</ControlBtn>
            </ControlBtnWrapper>


        </TimerContainer>
    )
}