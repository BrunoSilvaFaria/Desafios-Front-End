import React from 'react';
import '../styles.css';
import Card from './Card';
import data from '../data';

export default function Cards() {
    const cards = data.map((item) => {
        return (
            <Card
                key={item.title}
                item={item}
            />
        )

    })
    return (
        <div>
            {cards}
        </div>
    );
}