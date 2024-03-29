const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-layout">
        <div>
          <p>FILMOGRAFIA</p>
          <img
            src="src\img\projeto-site.PNG"
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
        <div>
          <img
            src="src\img\flappy_bird.PNG"
            alt="imagem do projeto filmografia"
            className="projects-img"
          />
          <p className="projects-detail">
            Meu primeiro projeto utilizando PYTHON, esse projeto utiliza as
            bibliotecas PYGAME e NEAT para recriar o famoso jogo flappy birds
          </p>
          <a href="https://github.com/helisondias/ProjetoFlappyBird" target="_blank" rel="noopener noreferrer">
            Ver projeto
          </a>
        </div>
        <br />
        <br />
        <img
          src="src\img\projeto-site.PNG"
          alt="imagem do projeto filmografia"
          className="projects-img"
        />
        <p className="projects-detail">
          Meu primeiro projeto utilizando REACT, o projeto{" "}
          <span>Filmografia</span> utiliza uma API de banco de dados do site
          TMDB e busca informações sobre filmes. O site também conta com um
          sistema de pesquisa que busca filmes especificos e trabalha com um
          sistema multipáginas usando o ROUTE
        </p>

        <a href="#" target="_blank" rel="noopener noreferrer">
          Ver projeto
        </a>
        <br />
        <br />
        <img
          src="src\img\projeto-site.PNG"
          alt="imagem do projeto filmografia"
          className="projects-img"
        />
        <p className="projects-detail">
          Meu primeiro projeto utilizando REACT, o projeto{" "}
          <span>Filmografia</span> utiliza uma API de banco de dados do site
          TMDB e busca informações sobre filmes. O site também conta com um
          sistema de pesquisa que busca filmes especificos e trabalha com um
          sistema multipáginas usando o ROUTE
        </p>

        <a href="#" target="_blank" rel="noopener noreferrer">
          Ver projeto
        </a>
      </div>
    </section>
  );
};

export default ProjectsContainer;
