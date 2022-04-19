import React from 'react';
import { HeroCard } from '../../components';
import { removeHero } from '../../services/heroesApi';

import { List, Container } from './HeroesList.styled'

const HeroesList = ({ items }) => {
    const onHeroRemoveClick = heroId => {
        removeHero(heroId)
    };

    return (
        <Container>
            <List>
                {
                    items.map((item) =>
                        <HeroCard key={item._id} item={item} onHeroRemoveClick={onHeroRemoveClick} />)
                }
            </List>
        </Container>
    )
}

export default HeroesList;