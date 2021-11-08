import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHerosById';


// import batman from '../../assets/heroes/dc-batman.jpg'   //recurso estatico
// const heroImages = require.context('../../assets/heroes', true);


export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    // console.log('Hero: ', hero, 'heroID: ', heroId)
    //    const hero = getHeroById(heroId);

    if (!hero) {
        return <Redirect to="/" />
    }

    const { superhero,
        publisher, alter_ego,
        first_appearance, characters } = hero;

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/')
        } else {

            history.goBack();
        }

        //esta validacion es si solo copiamos el url
        //en otra pagina pero al momento de regresar sale
        //asi que con esta validacion nos regresa a la pagina
    }
    //debemos de desestruturar todo lo que tenemos en el dato para hacer
    // el if

    return (
        <div className="row">
            <div className="col-md-6"  >
                <img
                    // src={`../assets/heroes/${heroId}.jpg`} //desde public/asset
                    // src={batman} import
                    src={heroImages(`./${heroId}.jpg`).default}

                    className="animate__animated animate__fadeInLeft pt-3"
                    alt={superhero}
                    style={{maxHeight:"550px"}} />
            </div>

            <div className="col-md-6 pt-5 hero-screen">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item animate__animated animate__fadeInRight"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item animate__animated animate__fadeInRight"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item animate__animated animate__fadeInRight"><b>First Appearence: </b>{first_appearance}</li>
                    <li className="list-group-item animate__animated animate__fadeInRight"><b>Characters: </b>{characters}</li>

                </ul>

                <div className="card-button">

                <button className="button2 btn  animate__animated animate__fadeInRight"
                    onClick={handleReturn}
                    style={{color:"black"}}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Return
                </button>
                </div>


            </div>
        </div>


    )
}
