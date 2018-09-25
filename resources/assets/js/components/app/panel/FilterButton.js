import React, {Component} from 'react';

export default class FilterButton extends Component {

    toggleFilters(event) {
        let filterSection = document.querySelector("section.filters-container");
        console.log(filterSection);
        filterSection.classList.toggle('filters-container--active');

        let body = document.querySelector("body");
        if(filterSection.classList.contains('filters-container--active')) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "scroll";
        }
        
    }

    render() {
        return (
            <button className="button button__filter" onClick={this.toggleFilters}>Filtry <i className="fas fa-filter"></i></button>
        )
    }
}