import React, {useState} from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from './tourData';

function TourList() {
    const [state, setState] = useState(tourData);
    
    function removeTour(id) {
        const tours = state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        setState(sortedTours);
    }
 
    return (
        <section className="tour-list">
            {state.map(tour => <Tour key={tour.id} tour={tour} removeTour={removeTour}/>)}
        </section>
    );
}

export default TourList;