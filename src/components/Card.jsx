import React from 'react';
import classes from './card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ image, name }) => {
    
    return (
        <div className={classes.container}>
            <div className={classes.card}>
            <img alt={name} src={image}></img>
            <h3>{name}</h3>
            <Link to={`${name}`}>See more</Link>

            </div>
        </div>
    );
};

export default Card;