import { heroes } from "../data/heros";

export const getHerosByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if(!validPublishers.includes(publisher)){
        throw new Error(`Publisher "${publisher} no es correcto"`);
   }

//    console.log(publisher);
   return heroes.filter(hero => hero.publisher === publisher );
}