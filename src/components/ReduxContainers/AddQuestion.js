import React from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../../actions/actions';
import { Div, Form, Input, Button } from './AddQuestion.elements';

let AddQuestion = (({dispatch}) => {
    let input;

    return (
        <Div>
            <Form  
            onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addQuestion(input.value));
                input.value = '';
            }}>
                <Input 
                    placeholder="Zapisz"
                    ref={node => {
                        input = node;
                    }}
                />                
                <Button type="submit">
                    ZAPISZ PYTANIE
                </Button>
            </Form>
        </Div>
    );
});

AddQuestion = connect()(AddQuestion);

export default AddQuestion;
