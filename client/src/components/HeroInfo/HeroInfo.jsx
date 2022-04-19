import React from 'react';

import defaultImage from '../../images/defaultImage.jpg'
import { Container, Image, ImageContainer, InfoContainer, Info, Title } from './HeroInfo.styled'

const HeroInfo = ({ hero }) => {
    const { nickname, real_name, origin_description, superpowers, catch_phrase } = hero;
    return (
        <>
            <Title>Superhero Information</Title>
            <Container>
                <ImageContainer>
                    <Image src={defaultImage} />
                </ImageContainer>
                <InfoContainer>
                    <Info>Hero:        <span>{nickname}</span></Info>
                    <Info>Real name:   <span>{real_name}</span></Info>
                    <Info>Description: <span>{origin_description}</span></Info>
                    <Info>Superpowers: <span>{superpowers}</span></Info>
                    <Info>Prase:       <span>{catch_phrase}</span></Info>
                </InfoContainer>
            </Container>
        </>
    )
}

export default HeroInfo;