import React from 'react';
import { useLocation, Link } from "react-router-dom";

import { Item, Image, Title, Button } from './HeroCard.styled';
import defaultImage from '../../images/defaultImage.jpg';

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
            <Link to={{ pathname: `/${id}`, state: { from: location } }}>
                <Title>{nickname}</Title>
            </Link>

            <Button type='button' onClick={() => onHeroRemoveClick(id)}>Delete Hero</Button>
        </Item>
    );
};

export default HeroCard;