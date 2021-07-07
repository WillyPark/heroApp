import { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from "../heroes/HeroCard";

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    //console.log(location.search);//Nos devuelve en texto la url después del signo de interrogación
    const { q = "" } = queryString.parse( location.search );//convierte en objeto los valores pasados por query string

    
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    
    const { searchText } = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>SearchScreen</h1><hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4><hr />

                    <form className="d-grid gap-2" onSubmit={ handleSearch }>
                        <input 
                            type="text" 
                            placeholder="Find your hero" 
                            className="form-control mt-2" 
                            name="searchText"
                            autoComplete="off"
                            value={ searchText } 
                            onChange={ handleInputChange }
                        />
                        <button type="submit" className="btn btn-outline-primary mt-2">Search...</button> 
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4><hr />

                    {
                        ( q === "") && <div className="alert alert-info">Search a hero</div>
                    }

                    {
                        ( q !== "" && heroesFiltered.length === 0) && <div className="alert alert-danger">There is no a hero with { q }</div>
                    }

                    <div className="d-flex justify-content-between flex-wrap animate__animated animate__fadeIn">
                        {
                            heroesFiltered.map( hero => ( <HeroCard key={ hero.id } { ...hero } /> ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
