import {Container} from "react-bootstrap";

export const Question = props => {

    const optionComponents = props.questionModel.possibleAnswers.map(possAnswerStr => (<option text={possAnswerStr}>{possAnswerStr}</option>));

    return (
        <Container>
            <div>{props.questionModel.questionText}</div>
            <select>
                <option selected disabled="true">---Select Answer---</option>
                {optionComponents}
            </select>
        </Container>
    );
};