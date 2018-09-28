import React, {Component} from 'react';
import FilterButton from './FilterButton';
import PlatformFilter from './PlatformFilter';
import GenresFilter from './GenresFilter';
import SortingFilter from './SortingFilter';

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
                    <form className="filters-container__form">
                        <PlatformFilter />
                        <GenresFilter />
                        <SortingFilter columns={this.props.columns} names={columnNames} />
                        <input type="submit" value="Filtruj" />
                    </form>
                </section>
            </div>
            
        )
    }
}