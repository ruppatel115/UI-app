import {useState } from 'react';
import { questionListModel, imageTaskList } from "../../test/resources/ExampleQuestions";
import { Button, Container, Row, Col, Image} from "react-bootstrap";
import {Question} from "../../main/js/QuestionDropdown"
import { QuestionList } from './QuestionList';

export const ImageTask = (props) => {
    return ( 
        <div>
            <Image src = {props.model.imageUrl} alt="NOT WORKING"/>
            <QuestionList questionListModel ={props.model.taskQuestions} />
        </div>
    );
}