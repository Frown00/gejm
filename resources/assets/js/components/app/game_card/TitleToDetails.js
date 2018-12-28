import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export const TitleToDetails = (props) => (
    <Link className={'game__title ' + 'game__title--'+ props.style} 
          to={{
                pathname: `/sites/gejm/public/${props.game.slug}`,
                state: props.game
            }} 
          key={props.game.id} >  
            <h1>{props.game.title}</h1>
            <h2>{props.game.developer}</h2>
            <h3>{props.game.publisher}</h3>      
    </Link>
)
