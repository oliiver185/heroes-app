
import React from 'react';
import { HeroList } from '../heros/HeroList';

export const DcScreen = () => {
    return (
        <div>
            <h2 className="animate__animated animate__fadeInLeft" >DC Heroes</h2>
            <hr/>

            <HeroList publisher={'DC Comics'} />
        </div>
    )
}
