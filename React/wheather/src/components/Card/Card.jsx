import '../../App.css';
import { CardConteiner } from './styles';
import './styles.js'
export const Card = () => {
    return (
        <CardConteiner>
            <div className='display'>
                <h2 className='title__text'>Niterói, RJ - Brasil</h2>
                <button className='button'>X</button>
            </div>
            
            <h1 className='title__wheather'>20ºC Nublado</h1>

            <div className='card-wheathers'>
                <div>
                    <div className='card-wheather card__text'>
                        <div className='card-wheather'>
                            <span className='card-wheather__icon'>^</span>
                            <span className='card-wheather__wheather card-wheather__wheather--min'>16º</span>
                        </div>

                        <div className='card-wheather'>
                            <span className='card-wheather__icon'>?</span>
                            <span className='card-wheather__wheather card-wheather__wheather--max'>25º</span>
                        </div>
                    </div>

                    <p className='card__text'>
                        Vento <span className='vento'>18km/h</span>
                    </p>
                </div>

                <div>
                    <p className='card__text'>
                        Sensação <span className='sensacao'>19ºC</span>
                    </p>
                    <p className='card__text'>
                        Humidade <span className='humidade'>89%</span>
                    </p>
                </div>
            </div>

            <section className='wheather__werly'>
                <div className='wheather__day'>
                    <h2 className='wheather__day-title'>Terça</h2>
                    <span className='wheather__day-wheather day-wheather--min'>18º</span>
                    <span className='wheather__day-wheather day-wheather--max'>26º</span>
                </div>

                <div className='wheather__day'>
                    <h2 className='wheather__day-title'>Quarta</h2>
                    <span className='wheather__day-wheather day-wheather--min'>18º</span>
                    <span className='wheather__day-wheather day-wheather--max'>26º</span>
                </div>

                <div className='wheather__day'>
                    <h2 className='wheather__day-title'>Quinta</h2>
                    <span className='wheather__day-wheather day-wheather--min'>18º</span>
                    <span className='wheather__day-wheather day-wheather--max'>26º</span>
                </div>

                <div className='wheather__day'>
                    <h2 className='wheather__day-title'>Sexta</h2>
                    <span className='wheather__day-wheather day-wheather--min'>18º</span>
                    <span className='wheather__day-wheather day-wheather--max'>26º</span>
                </div>

                <div className='wheather__day'>
                    <h2 className='wheather__day-title'>Sabado</h2>
                    <span className='wheather__day-wheather day-wheather--min'>18º</span>
                    <span className='wheather__day-wheather day-wheather--max'>26º</span>
                </div>

            </section>

        </CardConteiner>
    )
}