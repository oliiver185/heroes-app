import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher'
import HeroCard from './HeroCard';

export const HeroList = ({publisher}) => {
    
   const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher] );


    // const heroes = getHerosByPublisher(publisher);
    
    return (
        <div className="list-box animate__animated animate__fadeIn">
            {
                heroes.map(hero => 
                    <HeroCard
                     key={hero.id} 
                     {...hero}>
                    </HeroCard>
                    // console.log(hero.superhero);
                )
            }
            
        </div>
    )
}
