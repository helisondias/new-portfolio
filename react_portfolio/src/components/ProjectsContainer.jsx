import Projetosite from "../img/projetosite.png";
import Automacao from "../img/automacao.png";
import Flappy from "../img/flappybird.png";
import Narutojump from "../img/naruto.png";
import Pingpong from "../img/pingpong.png";
import Pokedex from "../img/poke.png";
import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-layout">
        <div className="projects-unitary">
          <p>FILMOGRAFIA</p>
          <img
            src={Projetosite}
            alt="imagem do projeto filmografia"
            className="projects-img"
          />
          <p className="projects-detail">
            Meu primeiro projeto utilizando REACT, esse projeto utiliza uma API
            de banco de dados do site TMDB e busca informações sobre filmes. O
            site também conta com um sistema de pesquisa que busca filmes
            especificos e trabalha com um sistema multipáginas usando o ROUTE
          </p>
          <a
            href="https://filmografia-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>
        <div className="projects-unitary">
          <p>FLAPPY BIRDS </p>
          <img
            src={Flappy}
            alt="imagem do projeto flappy birds"
            className="projects-img"
          />
          <p className="projects-detail">
            Meu primeiro projeto utilizando PYTHON, esse projeto utiliza as
            bibliotecas PYGAME e NEAT para recriar o famoso jogo flappy birds
          </p>
          <a
            href="https://github.com/helisondias/ProjetoFlappyBird"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>
        <div className="projects-unitary">
          <p>AUTOMAÇÃO DE EMAIL</p>
          <img
            src={Automacao}
            alt="imagem do projeto automação de projetos"
            className="projects-img"
          />
          <p className="projects-detail">
            Esse foi o meu segundo projeto utilizando PYTHON, nesse projeto eu
            utilizo as bibliotecas PYAUTOGUI e PANDAS para enviar um email
            automático controlando as funções MOUSE e TECLADO do meu computador
          </p>

          <a
            href="https://github.com/helisondias/AutomacaoEnvioDeEmail"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>
        <div className="projects-unitary">
          <p>PING PONG </p>
          <img
            src={Pingpong}
            alt="imagem do projeto pingpong"
            className="projects-img"
          />
          <p className="projects-detail">
            Meu terceiro projeto feito em python, dessa vez um jogo interativo
            de ping-pong, utilizando a biblioteca PYGAME
          </p>

          <a
            href="https://github.com/helisondias/PingPong"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>
        <div className="projects-unitary">
          <p>NARUTO JUMP</p>
          <img
            src={Narutojump}
            alt="imagem do projeto naruto jump"
            className="projects-img"
          />
          <p className="projects-detail">
            Meu quarto projeto feito em python, um jogo interativo chamado
            NARUTO JUMP, utilizei a biblioteca PYGAME novamente. O jogo foi
            baseado no jogo JUMP FOREVER mas com algumas adaptações
          </p>

          <a
            href="https://github.com/helisondias/NarutoJump"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>
        <div className="projects-unitary">
          <p>POKEDEX</p>
          <img
            src={Pokedex}
            alt="imagem do projeto pokedex"
            className="projects-img"
          />
          <p className="projects-detail">
            Meu segundo projeto feito em js, a famosa POKEDEX, utilizei a api
            POKEAPI para puxar dados dos pokemons e lista-los na pokedex. O site
            é dinamico e voce pode buscar por mais pokemons até um numero de 150
            pokemons, trazendo informações de 10 em 10. é dinâmico
          </p>

          <a
            href="https://pokedex-rouge-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
