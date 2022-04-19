import React from 'react';
import { removeHero } from '../api/heroesApi';

import defaultImage from '../images/defaultImage.jpg';
import { List, Item, Image, Title, Container, ButtonsContainer, Button } from './HeroesList.styled'

const HeroesList = ({ items, pageCount, onPageClick }) => {
    const onHeroRemoveClick = heroId => {
        removeHero(heroId)
    };

    return (
        <Container>
            <List>
                {
                    items.map(({ _id: id, superheroURL, nickname }) =>
                        <Item key={id}>
                            {!superheroURL ? (
                                <Image src={defaultImage} alt='default' />
                            ) : (
                                <Image src={superheroURL} alt={nickname} />
                            )}
                            <Title>{nickname}</Title>
                            <button type='button' onClick={() => onHeroRemoveClick(id)}>Delete Hero</button>
                        </Item>)
                }
            </List>
            <ButtonsContainer>
                {pageCount.map((pageIndex) => (
                    <Button type='button' onClick={() => onPageClick(pageIndex)} key={pageIndex}>{pageIndex + 1}</Button>
                ))}
            </ButtonsContainer>
        </Container>
    )
}

export default HeroesList;