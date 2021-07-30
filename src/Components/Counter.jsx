import React,{useState, useEffect} from 'react';

import '../assets/css/counter.css'
const seconds = 1000;
const minutes = seconds*60;
const hours = minutes*60;
const days = hours*24;

function Counter() {
    const [Seconds, setSeconds] = useState(0);
    const [Minutes, setMinutes] = useState(0);
    const [Hours, setHours] = useState(0);
    const [Days, setDays] = useState(0);
    const [start, setStart] = useState(false);

    const calculateTime = () => {
        const date = new Date("2021-08-25T15:35:58.000Z").getTime() - Date.now();
       
        const format = (time) => {
            const value = `${time}`;
            if(value.length < 2) return `0${value}`;
            else return value;
        }
        const time = Math.floor(date/seconds);
        const fSeconds = Math.floor(date/seconds) % 60;
        const fMinutes = Math.floor(date/minutes) % 60;
        const fHours = Math.floor(date/hours) % 24;
        const fDays = Math.floor(date/days);
        if(time > 0) {
            setStart(true);
        }
        setSeconds(format(fSeconds));
        setMinutes(format(fMinutes));
        setHours(format(fHours));
        setDays(fDays);
    }
    useEffect(() => {
        calculateTime();
      
    }, [])
    
    setTimeout(() => {
        calculateTime();
    },1000);
    
    if(!start) return (<div></div>);

    if(start) return (
        <div id="counter">
            <div className="dateItem">
                <h2>{Days}</h2>
                <p>DIAS</p>
            </div>
            <div className="dateItem">
                <h2>{Hours}</h2>
                <p>HORAS</p>
            </div>
            <div className="dateItem">
                <h2>{Minutes}</h2>
                <p>MINUTOS</p>
            </div>
            <div className="dateItem">
                <h2>{Seconds}</h2>
                <p>SEGUNDOS</p>
            </div>
        </div>
    )
}

export default Counter;
