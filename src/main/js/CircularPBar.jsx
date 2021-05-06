import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const CircularPBar = props => {
    let greenP = 0; 
    let redP = 0;
    let currP= 0;
    //For loop => goes through value element of JS Object 
    for (const char of props.progString){
        if(char == "o"){
            greenP =  greenP + 100 / props.progString.length; 
            redP = redP + 100 / props.progString.length;
        }
        else if(char == "x"){
            redP =  redP + 100 / props.progString.length;
        }
    }

    return (
        //Generate single CircualrBar
        <div style={{padding: "10px 500px" }}>   


        <h4>{props.progString}</h4>
            <CircularProgressbarWithChildren
                value={redP}
                text = {`${greenP}%`} //Change text inside circles
                styles={buildStyles({
                pathColor: "#f00",
                trailColor: "#CBC3E3", //Circle background color
                strokeLinecap: "butt"
            })}>
            {/* Foreground path */}
            <CircularProgressbar
                value={greenP}
                styles={buildStyles({
                pathColor : "#228B22",
                trailColor: "transparent",
                strokeLinecap: "butt"
            })}/>
            </CircularProgressbarWithChildren>
            
        </div>

    );
};

export default CircularPBar;