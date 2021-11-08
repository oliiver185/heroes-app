import React, { useMemo } from 'react'
import queryString from 'query-string'
// import { heroes } from '../../data/heros'
import HeroCard from '../heros/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHerosByName } from '../../selectors/getHerosByName';
// import { getHerosByName } from '../selectors/getHerosByName';
// import { heroes } from '../../data/heros';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    // console.log(location.search);
    const { q = '' } = queryString.parse(location.search);
    // console.log(q);
    const [values, handleInputChange,] = useForm({ searchText: q })


    const { searchText } = values;

    const herosFiltered = useMemo(() => getHerosByName(q), [q])

    // const herosFiltered = getHerosByName(searchText);

    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(searchText);
        history.push(`?q=${searchText}`)

    }

  


    return (
        <div className="search-screen">
           

            <div className="row">
                <div className="col-md-6">
                    <h4>Search your hero</h4>
                    <hr />

                    <form onSubmit={handleSearch} >
                        <input
                        
                            name="searchText"
                            value={searchText}
                            type="text"
                            placeholder="Find your hero"
                            className="form-control mt-5"
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                    <div className="card-button">
                        <button
                            type="submit"
                            className="button3"
                             
                        >
                            <span>

                            Search
                            </span>
                            </button>
                            </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <h4>Results</h4>
                    <hr />

                    <div className="list-box">

                    {

                        (q === '')
                        &&
                        <div className="alert alert-info mt-4 w-100">
                            {/* <i class="far fa-hand-point-left fa-2x"></i> */}
                            <i class="fas fa-arrow-circle-left"></i>
                        </div>

                    }

                    {

                        (q !== '' && herosFiltered.length ===0)
                        &&
                        <div className="alert alert-danger">
                            There are no results for {q}
                        </div>

                    }

                    {
                        herosFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        )

                        )
                    }
                    </div>

                </div>
            </div>
        </div>
    )
}
