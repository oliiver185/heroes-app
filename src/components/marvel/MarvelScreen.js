import React from 'react'
import { HeroList } from '../heros/HeroList'
// import { getHerosByPublisher } from '../selectors/getHerosByPublisher'
// import { getHerosByPublisher } from '../selectors/getHerosByPublisher'

export const MarvelScreen = () => {
    
   
    
    return (
        <div className="">
            <h2 className="animate__animated animate__fadeInLeft" >Marvel Heroes</h2>
            <HeroList publisher='Marvel Comics' />        
            
        </div>
    )
}
