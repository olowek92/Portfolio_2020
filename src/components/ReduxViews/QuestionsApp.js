import React from 'react';
import Footer from './Footer';
import AddQuestion from '../ReduxContainers/AddQuestion';
import VisibleQuestionsList from '../ReduxContainers/VisibleQuestionsList';

import { DivAddQuestion, DivVisibleQuestionList, DivFooter } from './QuestionsApp.elements'

const QuestionsApp = () => (
    <>
        <DivAddQuestion>
            <AddQuestion/>
        </DivAddQuestion>
        <DivVisibleQuestionList>
            <VisibleQuestionsList/>
        </DivVisibleQuestionList>
        <DivFooter>
            <Footer/>
        </DivFooter>
    </>
);

export default QuestionsApp;
