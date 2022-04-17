import React, { useState } from 'react';

import { Container, Form } from './HeroForm.styled';

const HeroForm = () => {
    const [nickname, setNickname] = useState('');
    const [realname, setRealname] = useState('');
    const [description, setDescription] = useState('');
    const [powers, setPowers] = useState('');
    const [phrase, setPhrase] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'nickname':
                setNickname(value);
                break;
            case 'realname':
                setRealname(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'powers':
                setPowers(value);
                break;
            case 'phrase':
                setPhrase(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        const images = [...e.target[5].files];
        console.log(images);
        const data = new FormData();
        data.append("images", images);

        resetForm();
    }

    const resetForm = () => {
        setNickname('');
        setRealname('');
        setDescription('');
        setPowers('');
        setPhrase('');
    }

    return (
        <Container>
            <h1>Add your hero</h1>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <label >
                    Nickname:
                    <input onChange={handleChange} value={nickname} name='nickname' type="text" />
                </label>
                <label >
                    Real name:
                    <input onChange={handleChange} value={realname} name='realname' type="text" />
                </label>
                <label >
                    Description:
                    <input onChange={handleChange} value={description} name='description' type="text" />
                </label>
                <label >
                    Superpowers:
                    <input onChange={handleChange} value={powers} name='powers' type="text" />
                </label>
                <label >
                    Catch phrase:
                    <input onChange={handleChange} value={phrase} name='phrase' type="text" />
                </label>

                Images:
                <input name="images" type="file" multiple />

                <button type='submit'>Add superhero</button>

            </Form>
        </Container>
    )
}

export default HeroForm