import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publiser ) => {

    const validPublisers = ["DC Comics", "Marvel Comics"];

    if ( !validPublisers.includes( publiser )){
        throw new Error(`Publiser "${ publiser }" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publiser );
}