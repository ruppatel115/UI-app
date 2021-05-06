import React from 'react';
import {example,exampleB, exampleC} from '../resources/ProgressTestData';
import {ProgressCircles} from '../../main/js/ProgressCircles';

export const ProgressDemo = props => {
    
    return (

        <div>
            {/* <ProgressCircles progModel={exampleC}/>   \ */}
            <ProgressCircles progModel={example}/>
            {/* <ProgressCircles progModel={exampleB}/>   */}
        </div>
    )
}
