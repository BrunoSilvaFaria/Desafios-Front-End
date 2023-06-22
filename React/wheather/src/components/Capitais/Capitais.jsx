import '../../App.css';
import { City } from './styles';
import './styles.js'
export const Citys = () => {
    return (
        <City>
            <h2 className='subtitle'>Capitais</h2>

            <div className='citys__display'>
                <section className='citys__wheather'>
                    <div className='header'>
                        <span className='header__text'>Min</span>
                        <span className='header__text'>Max</span>
                    </div>

                    <ul className='list'>
                        <li className='list__item'>
                            <span className='list__item--min'>18º</span>
                            <span className='list__item--max'>27º</span>
                            <span className='list__city'> Rio de Janeiro</span>
                        </li>

                        <li className='list__item'>
                            <span className='list__item--min'>18º</span>
                            <span className='list__item--max'>27º</span>
                            <span className='list__city'> Minas Gerais</span>
                        </li>

                        <li className='list__item'>
                            <span className='list__item--min'>18º</span>
                            <span className='list__item--max'>27º</span>
                            <span className='list__city'> São Paulo</span>
                        </li>
                    </ul>

                </section>

                <section className='citys__wheather'>
                    <div className='header'>
                        <span className='header__text'>Min</span>
                        <span className='header__text'>Max</span>
                    </div>

                    <ul className='list'>
                        <li className='list__item'>
                            <span className='list__item--min'>18º</span>
                            <span className='list__item--max'>27º</span>
                            <span className='list__city'> Belo Horizonte</span>
                        </li>

                        <li className='list__item'>
                            <span className='list__item--min'>18º</span>
                            <span className='list__item--max'>27º</span>
                            <span className='list__city'> Salvador</span>
                        </li>

                        <li className='list__item'>
                            <span className='list__item--min'>18º</span>
                            <span className='list__item--max'>27º</span>
                            <span className='list__city'> Bahia</span>
                        </li>
                    </ul>
                </section>
            </div>
        </City>
    )
}