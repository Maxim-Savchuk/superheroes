import React from 'react';
import { removeHero } from '../api/heroesApi';

import defaultImage from '../images/defaultImage.jpg';
import { List, Item, Image, Title } from './HeroesList.styled'

const HeroesList = ({ items }) => {
    const onHeroRemoveClick = heroId => {
        removeHero(heroId);
        return items.filter(item => item._id !== heroId);
    };

    return (
        <List>
            {items.length !== 0 ? (
                items.map(({ _id: id, superheroURL, nickname }) =>
                    <Item key={id}>
                        {!superheroURL ? (
                            <Image src={defaultImage} alt='default' />
                        ) : (
                            <Image src={superheroURL} alt='superhero' />
                        )}
                        <Title>{nickname}</Title>
                        <button type='button' onClick={() => onHeroRemoveClick(id)}>Delete Hero</button>
                    </Item>)
            ) : (
                <p>Superheroes don't exist</p>
            )}
        </List>
    )
}

export default HeroesList;