/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

// styles
import './cadr.style.css';

export const Card = props => (
    <div className="card-container">
        <img alt="person-photo" src={`https://robohash.org/${props.person.id}?set=set4&size=180x180`}/>
        <h3>Name: {props.person.name}</h3>
        <p>Email: {props.person.email}</p>
    </div>
)