import React from "react";
import '../styles.css';
import star from '../assets/star.svg';
export default function Project(props) {
    let statusText;
    if (props.item.openSpots === 0){
        statusText = "sold out";
    } else if (props.item.location === 'Online'){
        statusText = 'online';
    }
    return (
        <section className="project">
            <img src={props.item.coverImg} className="project__img" alt="Foto ilustrativa" />
            {statusText && <div className= 'project__status'>
                <p>{statusText}</p>
            </div>
            }
            
            <section className="project__info">
                <section className="rate">
                    <img className="icon__star" alt='Icone de estrela' src={star} />
                    <span className="rate__stars">
                        {props.item.stats.rating.toFixed(1)}
                    </span>
                    <span className="rate__text">
                        ({props.item.stats.reviewCount}) º {props.item.location}
                    </span>
                </section>
            </section>
            <section className="project__resume">
                <h2 className="project__title">
                    {props.item.title}
                </h2>
                <p className="project__price">
                    <span className="project__price--destaque">From ${props.item.price}</span> / person
                </p>
            </section>
        </section>
    )
};
