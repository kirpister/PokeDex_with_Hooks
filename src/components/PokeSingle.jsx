import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import classes from './pokesingle.module.css';

const PokeSingle = () => {

const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();
const params = useParams();

useEffect(() => {
    setIsLoading(true);

    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
        .then((res) => {
            setData(res.data);
            setIsLoading(false);
            console.log(res.data);
    });
}, []);

    if (isLoading) {
        return <p>Loading....</p>;
    }

    return (
<>
        <div className={classes.singlepoke}>             
        <h2>{data.name}</h2>
        <img alt={data.name} src={data.sprites?.other.dream_world.front_default}></img>
        <h5>Weight: {data.weight}  |  Height: {data.height}</h5>
        </div>
        <div><button onClick={() => navigate(-1)}>Go Back</button></div>
</>   
    );
};

export default PokeSingle;

