import { render, screen} from '@testing-library/react';

import {Question} from "../../main/js/Question"
import {planeQuestion, structureQuestion} from "../resources/ExampleQuestions"

describe('Question', () => {
    it('check questions are created correctly', () => {
        render(<Question questionModel={planeQuestion}/>);
        screen.debug();
    });
});