import { HeaderContainer } from "./styles";
export default function Nav() {
  return (
      <HeaderContainer>
          <nav>
              <ul className="list">
                  <li className="list__item">
                      <a href="aboutMe" className="list__link">About me</a>
                  </li>

                  <li className="list__item">
                      <a href="aboutMe" className="list__link">Technologies</a>
                  </li>

                  <li className="list__item">
                      <a href="aboutMe" className="list__link">Projects</a>
                  </li>

                  <li className="list__item">
                      <a href="aboutMe" className="list__link">Contact</a>
                  </li>
              </ul>

              <ul className="redes">
                  <li className="redes__item">
                      <a href="" className="redes__link">
                          <span className="redes__icon">
                          G
                          </span>
                      </a>
                  </li>

                  <li className="redes__item">
                      <a href="" className="redes__link">
                          <span className="redes__icon">
                          I
                          </span>
                      </a>
                  </li>

                  <li className="redes__item">
                      <a href="" className="redes__link">
                          <span className="redes__icon">
                          E
                          </span>
                      </a>
                  </li>
              </ul>
          </nav>
      </HeaderContainer>
  );
}