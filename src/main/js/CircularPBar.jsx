import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const CircularPBar = props => {
    var blueP = 0;
    var redP = 0;

    //For loop => goes through value element of JS Object 
    
    for( var i in Object.value(ProgressTestData)){
        if(Object.value(ProgressTestData[i]) === "o"){
            blueP =  blueP + 25;
            redP = redP + 25;
        }
        else if(Object.value(ProgressTestData[i]) === "x"){
            redP =  redP + 25;
        }
    }
    

    return (
        //Generate single CircualrBar
        <div style={{ width: 200, height: 200, padding: "10px 500px" }}>   

            <CircularProgressbarWithChildren
                value={redP}
                text = {`${blueP}%`}
                styles={buildStyles({
                pathColor: "#f00",
                trailColor: "",
                strokeLinecap: "butt"
            })}>
            {/* Foreground path */}
            <CircularProgressbar
                value={blueP}
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