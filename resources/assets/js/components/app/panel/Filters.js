import React, {Component} from 'react';
import FilterButton from './FilterButton';

export default class Filters extends Component {
    render() {
        return (
            <div>
                <FilterButton />
                <section className="filters-container">
                    <div>
                        Platformy
                    </div>  
                    <div>
                        Filtry wielokrotnego wyboru
                    </div>    
                    <div>
                        Filtry A-Z
                    </div>
                </section>
            </div>
            
        )
    }
}