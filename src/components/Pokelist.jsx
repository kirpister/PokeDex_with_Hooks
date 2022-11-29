import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './Card';
import classes from './pokelist.module.css';

const Pokelist = () => {

const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    setIsLoading(true);

    axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then((res) => {
            const fetches = res.data.results.map((poke) => {
                return axios.get(poke.url).then((res) => res.data);
            });

        Promise.all(fetches).then((res) => {
            setData(res);
            setIsLoading(false); 
        });
      });
}, []);


return (

         <div className={classes.container}>
        
        {data.map((card) => (
            <Card
            name={card.name} 
            key={card.name} 
            image={card.sprites.other['official-artwork'].front_default}
             />
        ))}

        </div>
    );
};

export default Pokelist;
