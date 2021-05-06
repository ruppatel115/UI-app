import React from 'react';
import {example} from '../resources/ProgressTestData';
import {ProgressCircles} from '../../main/js/ProgressCircles';
import {exampleB} from '../resources/ProgressTestData';

export const ProgressDemo = props => {
    
    return (

        <div>
            <ProgressCircles progModel={exampleB}/>   
        </div>
    )
}
