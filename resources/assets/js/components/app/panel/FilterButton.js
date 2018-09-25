import React, {Component} from 'react';

export default class FilterButton extends Component {

    toggleFilters(event) {
        let filterSection = document.querySelector("section.filters-container");
        console.log(filterSection);
        filterSection.classList.toggle('filters-container--active');
        filterSection.classList.toggle('filters-container--hidden');
    }

    render() {
        return (
            <button className="button__filter" onClick={this.toggleFilters}><i className="fas fa-filter"></i></button>
        )
    }
}