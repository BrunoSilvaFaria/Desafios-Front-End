import { TecnologiesContainer } from "./styles";
export default function Tecnologies() {
    return (
        <TecnologiesContainer>
            <div class="alinhamento">
                <div className="title__conteiner">
                    <h2 className="title">Tecnologies</h2>
                    <hr />
                </div>

                <section className="cards">
                    <div className="|">
                        <section className="card">
                            <div className="align">
                                <div className="alinhamento">
                                    <h3 className="tecnologie">
                                        html & css
                                    </h3>
                                    <p className="resume">
                                        Responsive websites with fast loading.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
           
        </TecnologiesContainer>
    )
}