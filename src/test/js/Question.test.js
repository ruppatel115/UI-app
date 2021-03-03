import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Question} from "../../main/js/Question"
import {planeQuestion, structureQuestion} from "../resources/ExampleQuestions"

describe('Question', () => {
    test('check feedback', () => {
        //render creates your html in the "screen" object that you import
        render(<Question questionModel={planeQuestion}/>);
        //anytime you want to print the current html dom, call debug
        screen.debug();

        //check that there are 3 options
        expect (screen.getAllByRole("option").length).toBe(3);
        //check that there is no feedback, slashes are for regular expressions, so it's checking anythign with "orrect" in it
        expect(screen.queryByText(/orrect/)).toBeNull();

        //select the correct answer
        userEvent.selectOptions(screen.getByRole("combobox"), "transverse (short axis)");
        //check that you get feedback, can't use regular expression, because it would also match incorrect
        expect (screen.getByText("Correct")).toBeInTheDocument();
        screen.debug();

        //select the incorrect answer
        userEvent.selectOptions(screen.getByRole("combobox"), "longitudinal (long axis)");
        //check that you get feedback on incorrect answer
        expect (screen.getByText(/Incorrect/)).toBeInTheDocument();
        screen.debug();
    });
});