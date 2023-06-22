import { AboutContainer } from "./styles";
export default function About() {
    return (
        <AboutContainer>
            <section className="alinhamento">
                <div className="title__conteiner">
                    <h2 className="title">About me</h2>
                    <hr />
                </div>
                <section className="bio">
                    <div className="foto"></div>
                    <section className="description">
                        <h3 className="subtitle">
                            Bruno Faria
                        </h3>
                        <p className="paragraph">
                                Eu sou um Desenvolvedor Front End. Apaxaixonado por programação desde os meus 14 anos, procuro sempre me atualizar e conhecer o máximo possível. Atualmente, estou fazendo projetos pessoais, tal como, atuando com ONG’s para melhorar meus conhecimentos e adquirir mais experiência
                        </p>
                        <ul className="redes">
                      <li className="redes__item">
                          <a href="#" className="redes__link">Linkedlin</a>
                      </li>
                      <li className="redes__item">
                          <a href="#" className="redes__link">Github</a>
                      </li>
                      <li className="redes__item">
                          <a href="#" className="redes__link">Email</a>
                      </li>
                  </ul>
                    </section>
                </section>
            </section>
        </AboutContainer>
    )
}