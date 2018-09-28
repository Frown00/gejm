import React, {Component} from 'react';

export default class SortingFilter extends Component {
    render() {
        const names = this.props.names;
        return (
            <div>
                <p>Sortuj</p>
                <section className="sorting-filter">
                {   
                    
                    Object.values(names).map( (value, key) => 
                         // key: the name of the object key
                        // index: the ordinal position of the key within the object 
                        (
                            <span key={key} className="sorting-filter__column">{value} <i className="alphabetic-filter__arrow fas fa-caret-right"></i> </span>
                        )
                    )    
                }
                
                </section>
            </div>
            
            
        )
    }
}