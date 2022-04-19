import { useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { HeroInfo } from "../../components";
import { getHero } from '../../services/heroesApi';

const HeroPage = () => {
    const { superheroId } = useParams();
    const [superhero, setSuperhero] = useState(() => null);
    const [isLoading, setIsloading] = useState(false)
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        setIsloading(true);
        getHero(superheroId)
            .then(({ result }) => setSuperhero(result))
            .finally(() => setIsloading(false));
    }, [superheroId]);

    const handleGoBackClick = () => {
        history.push(location.state?.from || "/");
    };

    return (
        <div>
            {isLoading && <h2>Loading superhero...</h2>}
            <button type="button" onClick={handleGoBackClick} >Go back</button>
            {superhero ? (
                <HeroInfo hero={superhero} />
            ) : (
                <h2>Superhero don't exist</h2>
            )}
        </div>
    )
}

export default HeroPage;