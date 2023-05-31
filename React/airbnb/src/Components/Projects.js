import React from "react";
import '../styles.css';
import Project from './Project';
import data from './data';

export default function Projects() {
    const cards = data.map((item) => {
        return (
            <Project
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div className="projects">
            {cards}
        </div>
    )
};



