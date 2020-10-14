import React, {useState}  from 'react';
import './Tour.scss';

function Tour(props) {
    const [showInfo, setShowInfo] = useState(false);
    const removeTour = props.removeTour;

    return (
        <article className="tour">
            <div className="img-container">
                <img src={process.env.PUBLIC_URL + props.tour.img} alt={props.tour.city}/>
                <span className="close-btn" onClick={() => removeTour(props.tour.id)}>
                    <i className="fas fa-window-close" />
                </span>
            </div>
            <div className="tour-info">
                <h3>{props.tour.city}</h3>
                <h4>{props.tour.name}</h4>
                <h5>
                    info{" "}
                    <span onClick={() => setShowInfo(!showInfo)}>
                        <i className="fas fa-caret-square-down" />
                    </span>
                </h5>
                {
                    showInfo && 
                    <p>
                        {props.tour.info}
                    </p>
                }
            </div>
        </article>
    );
}

export default Tour;