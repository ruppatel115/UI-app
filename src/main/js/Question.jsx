import {Container} from "react-bootstrap";

export const Question = props => {
    //this could be done with a for loop doing an accumulator, if you prefer
    const optionComponents = props.questionModel.possibleAnswers.map(possAnswerStr => (<option key={possAnswerStr}>{possAnswerStr}</option>));

    return (
        <Container>
            <div>{props.questionModel.questionText}</div>
            <select defaultValue="---Select Answer---">
                <option key="---Select Answer---" disabled={true}>---Select Answer---</option>
                {optionComponents}
            </select>
        </Container>
    );
};