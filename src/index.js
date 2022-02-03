import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
    namne: "Madrid",
    country: "Spain"
};

ReactDOM.render(
  <h1 id="heading" className="cool-text">
    {city.namne} is in {city.country}
  </h1>,
  document.getElementById('root')
);
