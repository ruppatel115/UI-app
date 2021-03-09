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




describe('Question2', () => {
    test('check feedback', () => {
        //render creates your html in the "screen" object that you import
        render(<Question questionModel={structureQuestion}/>);
        //anytime you want to print the current html dom, call debug
        screen.debug();

        //check that there are 15 options
        expect (screen.getAllByRole("option").length).toBe(15);
        //check that there is no feedback, slashes are for regular expressions, so it's checking anythign with "orrect" in it
        expect(screen.queryByText(/orrect/)).toBeNull();

        //correct answer
        userEvent.selectOptions(screen.getByRole("combobox"), "palmar annular ligament");
        //check that you get feedback, can't use regular expression, because it would also match incorrect
        expect (screen.getByText("Correct")).toBeInTheDocument();
        screen.debug();

        //incorrect answer
        userEvent.selectOptions(screen.getByRole("combobox"), [ "Superficial digital flexor tendon", "Deep digital flexor tendon", "Suspensory ligament (body)", "Suspensory ligament (branches)", "Distal check ligament (accessory ligament of the deep digital flexor tendon)", "Metacarpus bone 3 (Third metacarpal bone)", "Proximal sesamoid bones", "P1 (First phalanx)", "P2 (Second phalanx)", "Distal sesamoidean ligaments – straight and oblique)", "Palmar annular ligament", "Palmar ligament", "Palmar vessels (medial/lateral)", "Palmar metacarpal vessels (medial/lateral)" ]);
        //check that you get feedback on incorrect answer
        expect (screen.getByText(/Incorrect/)).toBeInTheDocument();
        screen.debug();


        
    });


    

    //Test Displaying of image for a question


    //Test checking if Logo is displayed
    

    //Checking alignment structure for image and dropbox


    //Displaying one question

});