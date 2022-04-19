import React from 'react';
import { useLocation } from "react-router-dom";
import { Item, Image, Title } from './HeroCard.styled';

import defaultImage from '../../images/defaultImage.jpg';
import { Link } from 'react-router-dom';

const HeroCard = ({ item, onHeroRemoveClick }) => {
    const location = useLocation();
    const { _id: id, superheroURL, nickname } = item;

    return (
        <Item>
            {!superheroURL ? (
                <Image src={defaultImage} alt='default' />
            ) : (
                <Image src={superheroURL} alt={nickname} />
            )}
            <Link to={{ pathname: `/superheroes/${id}`, state: { from: location } }}>
                <Title>{nickname}</Title>
            </Link>

            <button type='button' onClick={() => onHeroRemoveClick(id)}>Delete Hero</button>
        </Item>
    );
};

export default HeroCard;