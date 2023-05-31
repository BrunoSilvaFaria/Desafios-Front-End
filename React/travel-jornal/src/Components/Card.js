import React from 'react';
import '../styles.css';
import logo from '../assets/icon-location.svg';
export default function Card(props) {

    return (
        <>

            <section className='card'>
                <img className='card__img' alt='Foto ilustrativa' src={props.item.image} />
                <section className='conteiner'>
                    <div className='location'>
                        <div className='location__conteiner'>
                            <img className='location__icon' alt='Logo do site' src={logo} />
                            <h2 className='location__country'>{props.item.location}</h2>
                        </div>

                        <a className='location__link' href={props.item.googleMapsUrl} target='new_blank'>View on Google Maps</a>
                    </div>

                    <h1 className='destiny'>
                        {props.item.title}
                    </h1>

                    <div className='date'>
                        <span className='date__text'>
                            {props.item.startDate}
                        </span> - <span className='date__text'>
                            {props.item.endDate}
                        </span>
                    </div>

                    <p className='description'>
                        {props.item.description}
                    </p>
                </section>
            </section>
        </>
    )
}