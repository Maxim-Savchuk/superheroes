import React, { useEffect, useState } from 'react';
import { HeroesList, HeroForm } from '../../components'
import { getAllHeroes } from '../../services/heroesApi';

import { Container, Button, ButtonsContainer } from './HomePage.styled';

const HomePage = () => {
    const [superheroes, setSuperheroes] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [activePage, setActivePage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const pages = new Array(totalPages).fill(null).map((v, i) => i);

    useEffect(() => {
        setIsLoading(true);
        getAllHeroes(activePage)
            .then(({ result, totalPages }) => {
                setTotalPages(totalPages);
                setSuperheroes(result);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [activePage]);

    const setPage = page => setActivePage(page);

    return (
        <Container>
            {isLoading && <h2>Loading...</h2>}
            {superheroes && (
                <>
                    <HeroesList items={superheroes} />
                    <ButtonsContainer>
                        {pages.map((pageIndex) => (
                            <Button type='button' onClick={() => setPage(pageIndex)} key={pageIndex}>{pageIndex + 1}</Button>
                        ))}
                    </ButtonsContainer>
                </>
            )}
            <HeroForm />
        </Container>
    );
}

export default HomePage