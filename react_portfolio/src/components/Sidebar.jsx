
import SocialNetworks from "./SocialNetworks";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import resume from "../img/Helison-cv.pdf";

const Sidebar = () => {
  return (
    <aside id="sidebar">

      <p className="title">Desenvolvedor Junior</p>
      <SocialNetworks />
      <InformationContainer />

      <a href="https://projeto-website-portfolio.vercel.app/" className="btn" target="blank">
        Acessar Currículo Digital
      </a>
      <br />
      <a href={resume} className="btn" download="Helison-Dias-Currículo">
        Baixar Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
