import React, { useState } from 'react';
import { createHero } from '../api/heroesApi';

import { Container, Form, Label, Title } from './HeroForm.styled';

const HeroForm = () => {
    const [nickname, setNickname] = useState('');
    const [real_name, setReal_name] = useState('');
    const [origin_description, setOrigin_description] = useState('');
    const [superpowers, setSuperpowers] = useState('');
    const [catch_phrase, setCatch_phrase] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'nickname':
                setNickname(value);
                break;
            case 'realname':
                setReal_name(value);
                break;
            case 'description':
                setOrigin_description(value);
                break;
            case 'powers':
                setSuperpowers(value);
                break;
            case 'phrase':
                setCatch_phrase(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        const hero = { nickname, real_name, origin_description, superpowers, catch_phrase };
        createHero(hero);

        // const images = [...e.target[5].files];
        // console.log(images);
        // const data = new FormData();
        // data.append("images", images);

        resetForm();
    }

    const resetForm = () => {
        setNickname('');
        setReal_name('');
        setOrigin_description('');
        setSuperpowers('');
        setCatch_phrase('');
    }
    //encType='multipart/form-data'
    return (
        <Container>
            <Title>Add your hero</Title>
            <Form onSubmit={handleSubmit} >
                <Label >
                    Nickname:
                    <input onChange={handleChange} value={nickname} name='nickname' type="text" />
                </Label>
                <Label >
                    Real name:
                    <input onChange={handleChange} value={real_name} name='realname' type="text" />
                </Label>
                <Label >
                    Description:
                    <textarea onChange={handleChange} value={origin_description} name='description' type="text" />
                </Label>
                <Label >
                    Superpowers:
                    <textarea onChange={handleChange} value={superpowers} name='powers' type="text" />
                </Label>
                <Label >
                    Catch phrase:
                    <input onChange={handleChange} value={catch_phrase} name='phrase' type="text" />
                </Label>
                {/* Images:
                <input name="images" type="file" multiple /> */}
                <button type='submit'>Add superhero</button>
            </Form>
        </Container>
    )
}

export default HeroForm;