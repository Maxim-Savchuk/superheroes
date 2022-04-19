import React from 'react';

const HeroInfo = ({ hero }) => {
    console.log(hero);
    return (
        <div>
            {hero.nickname}
        </div>
    )
}

export default HeroInfo;