import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import "./heroCard.css";

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    return (
        <Link to={`./hero/${id}`} className="my-card">
            <img 
                // src={ `./docs/assets/heroes/${ id }.jpg` } //build de produccion
                // src={ `./assets/heroes/${ id }.jpg` } 
                src={ heroImages(`./${ id }.jpg`).default }
                className="img img-responsive" 
                alt={ superhero } 
            />
            <div className="profile-name">{ superhero }</div>
            <div className="profile-position">{ alter_ego }</div>
            <div className="profile-overview">
                <div className="row">
                    <div className="col-ms-4">
                        <div className="card-body">
                            <h3>{ publisher }</h3>
                            <p>Primera aparición: <br/>{ first_appearance }</p>
                            {
                                (alter_ego !== characters )
                                && <p className="card-text">{ characters }</p> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
