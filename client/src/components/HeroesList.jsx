import React from 'react'

const HeroesList = ({ items }) => {
    return (
        <ul>
            {items.length !== 0 ? (
                items.map((item) => <li key={item._id}>{item.nickname}</li>)
            ) : (
                <p>Superheroes don't exist</p>
            )}
        </ul>
    )
}

export default HeroesList;