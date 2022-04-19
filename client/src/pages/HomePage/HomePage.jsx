import React, { useEffect, useState } from 'react';
import { HeroesList, HeroForm } from '../../components'
import { getAllHeroes } from '../../services/heroesApi';

import { Button, ButtonsContainer } from './HomePage.styled';

const HomePage = () => {
    const [superheroes, setSuperheroes] = useState([]);

    const [activePage, setActivePage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const pages = new Array(totalPages).fill(null).map((v, i) => i);

    useEffect(() => {
        if (superheroes.length === 0) {
            return;
        }
        getAllHeroes(activePage).then(({ result, totalPages }) => {
            setTotalPages(totalPages);
            setSuperheroes(result);
        });
    }, [activePage, superheroes])

    const setNumberOfPage = page => {
        setActivePage(page);
    }

    return (
        <>
            {superheroes &&
                <HeroesList items={superheroes} pageCount={pages} onPageClick={setNumberOfPage} />}
            <ButtonsContainer>
                {pages.map((pageIndex) => (
                    <Button type='button' onClick={() => setNumberOfPage(pageIndex)} key={pageIndex}>{pageIndex + 1}</Button>
                ))}
            </ButtonsContainer>
            <HeroForm />
        </>
    );
}

export default HomePage