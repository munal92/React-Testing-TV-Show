import React from 'react';
import Axios from 'axios';

export const fetchShow = () => {
    return Axios
    .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        console.log(res.data)
        return res.data;
    })
    .catch(err => {
        console.error("error fetching data from api, err: ", err.message);
        return err;
      });
    
}

