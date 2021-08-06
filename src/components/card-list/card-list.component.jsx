import React from 'react';

import { Card } from '../card/card.component';

// styles
import './card-list.styles.css';

export const CardList = props => (
    <div className="card-list">
        {props.people.map(person => (
            <Card key = {person.id} person = {person} />
        ))}
    </div>
);