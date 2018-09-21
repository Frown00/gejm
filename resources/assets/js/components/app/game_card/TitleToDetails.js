import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export const TitleToDetails = (props) => (
    <Link to={`/${props.slug}`} key={props.id} >
        <div className={'game__title ' + 'game__title--'+ props.style}>
            {props.title}
        </div>
    </Link>
)
