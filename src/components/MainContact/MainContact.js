import React, { useState } from 'react';

import emailjs from "emailjs-com";

import { Main, Div, Form, Label, DivName, ImgFullArrow, ImgBlankArrow, Input, Span, DivEmail, DivQuestion, Textarea, DivButton, Button } from "./MainContact.elements";

const MainContact = () => {

    const errorMessages = {
        nameRequired: 'Imię jest wymagane',
        nameTooShort: 'Imię jest za krótkie',
        emailRequired: 'E-mail jest wymagany',
        emailIncorrect: 'Niepoprawny adres e-mail',
        messageRequired: 'Wiadomość jest wymagana',
        messageTooShort: 'Wiadomość jest za krótka',
    }

    const succeedMessage = {
        formSent: 'Formularz wysłany poprawnie!'
    }

    const validate = form => {

        if(!form.name) {
            return errorMessages.nameRequired
        } else if(form.name.length < 3) {
            return errorMessages.nameTooShort
        }

        if(!form.email) {
            return errorMessages.emailRequired
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            return errorMessages.emailIncorrect
        }

        if(!form.message) {
            return errorMessages.messageRequired
        } else if (form.message.length <= 15) {
            return errorMessages.messageTooShort
        }

        return succeedMessage.formSent;
    }

    const [error, setError] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const SendEmail = (e) => {
        e.preventDefault();

        const errorMsg = validate(form);

        if(errorMsg) {
            setError(errorMsg);
        }

        if(errorMsg === succeedMessage.formSent) {
            emailjs.sendForm('61403', 'template_bk8mdnm', e.target, 'user_kdgSj2t9GywDNk9JMRvx6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        }
    }

    return ( 
        <>
            <Main>
                <Div>
                    <Form onSubmit={SendEmail} noValidate>
                        <Label htmlFor='name'>
                            <DivName>
                                    <ImgFullArrow 
                                        src="/images/FullArrow.png" 
                                        alt="FullArrow"/>
                                    <Input 
                                        name="name"
                                        type="text" 
                                        placeholder="Imię"
                                        id='name'
                                        onChange={updateField}
                                    />
                            </DivName>
                            <Span>
                                {errorMessages.nameRequired === error ? error : ""}
                                {errorMessages.nameTooShort === error ? error : ""}
                            </Span>
                        </Label>

                        <Label htmlFor='email'>
                            <DivEmail>
                                    <ImgBlankArrow 
                                        src="/images/BlankArrow.png" 
                                        alt="BlankArrow"/>
                                    <Input 
                                        name="email"
                                        type="email" 
                                        placeholder="E-mail"
                                        id='email'
                                        onChange={updateField}
                                    />
                            </DivEmail>
                            <Span>
                                {errorMessages.emailRequired === error ? error : ""}
                                {errorMessages.emailIncorrect === error ? error : ""}
                            </Span>
                        </Label>


                        <Label htmlFor='message'>
                            <DivQuestion>
                                    <ImgFullArrow 
                                        src="/images/FullArrow.png" 
                                        alt="FullArrow"/>
                                    <Textarea
                                        name="message"
                                        placeholder="W czym mogę Ci pomóc?"
                                        id='message'
                                        onChange={updateField}
                                    />
                            </DivQuestion>
                            <Span>
                                {errorMessages.messageRequired === error ? error : ""}
                                {errorMessages.messageTooShort === error ? error : ""}
                            </Span>
                        </Label>

                        <Label htmlFor='btn'>
                            <DivButton>
                                <ImgBlankArrow src="/images/BlankArrow.png" alt="BlankArrow"/>
                                <Button type="submit" id='btn'>
                                wyślij
                                </Button>
                            </DivButton>
                            <Span>
                                {succeedMessage.formSent === error ? error : ""}
                            </Span>
                        </Label>
                    </Form>
                </Div>
            </Main>
        </>
     );
}
 
export default MainContact;