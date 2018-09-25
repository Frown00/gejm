import React, {Component} from 'react';
import FilterButton from './FilterButton';
import PlatformFilter from './PlatformFilter';
import GenresFilter from './GenresFilter';
import AlphabeticFilter from './AlphabeticFilter';

export default class Filters extends Component {
    render() {
        const columnNames = {
            title: "Tytuł",
            developer: "Twórca",
            publisher: "Wydawca",
            release_year: "Data wydania",
            rating_avg: "Ocena",
            popularity: "Popularność",
            difficulty: "Trudność",
            requirements: "Wymagania"
        };
        return (
            <div>
                <FilterButton />
                <section className="filters-container">
                    <PlatformFilter />
                    <GenresFilter />
                    <AlphabeticFilter columns={this.props.columns} names={columnNames} />
                </section>
            </div>
            
        )
    }
}