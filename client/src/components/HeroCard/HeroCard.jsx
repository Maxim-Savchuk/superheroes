import React from 'react';
import { Item, Image, Title } from './HeroCard.styled';

import defaultImage from '../../images/defaultImage.jpg';

const HeroCard = ({ item, onHeroRemoveClick }) => {
    const { _id: id, superheroURL, nickname } = item;
    return (
        <Item>
            {!superheroURL ? (
                <Image src={defaultImage} alt='default' />
            ) : (
                <Image src={superheroURL} alt={nickname} />
            )}
            <Title>{nickname}</Title>
            <button type='button' onClick={() => onHeroRemoveClick(id)}>Delete Hero</button>
        </Item>
    );
};

export default HeroCard;