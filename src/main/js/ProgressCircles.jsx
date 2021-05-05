import React from 'react';
import {CircularPBar} from './CircularPBar';
import ProgressDemo from '../../test/js/ProgressDemo';


export const ProgressCircles = props => {

//console.log(props.progModel);


    let circles=[]; //should be many CircularPBar objects 
    

    for (const myLabel in props.progModel){
        let aCircle=<CircularPBar label={myLabel} progString={props.progModel[myLabel]}/>;
        circles.push(aCircle);
    }




    return (
        <div>

            {circles}

        </div>


    );

}

export default ProgressCircles;