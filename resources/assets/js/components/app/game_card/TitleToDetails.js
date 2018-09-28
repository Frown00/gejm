import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export const TitleToDetails = (props) => (
    <Link className={'game__title ' + 'game__title--'+ props.style} to={`/sites/gejm/public/${props.slug}`} key={props.id} >  
            <h1>{props.title}</h1>
            <h2>{props.developer}</h2>
            <h3>{props.publisher}</h3>      
    </Link>
)
