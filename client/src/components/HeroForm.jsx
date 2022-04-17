import React from 'react';

import { Container, Form } from './HeroForm.styled';

const HeroForm = () => {


    return (
        <Container>
            <h1>Add your hero</h1>
            <Form encType='multipart/form-data'>
                <label >
                    Nickname:
                    <input name='nickname' type="text" />
                </label>
                <label >
                    Real name:
                    <input name='realname' type="text" />
                </label>
                <label >
                    Description:
                    <input name='description' type="text" />
                </label>
                <label >
                    Superpowers:
                    <input name='powers' type="text" />
                </label>
                <label >
                    Catch phrase:
                    <input name='phrase' type="text" />
                </label>

                Images:
                <input name="images" type="file" multiple />

                <button type='submit'>Add superhero</button>

            </Form>
        </Container>
    )
}

export default HeroForm