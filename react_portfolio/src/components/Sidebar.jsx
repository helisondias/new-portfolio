import Avatar from "../img/eu.png";
import SocialNetworks from "./SocialNetworks";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import resume from "../img/Helison-cv.pdf";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Helison Dias" />
      <p className="title">Desenvolvedor Junior</p>
      <SocialNetworks />
      <InformationContainer />

      <a href={resume} className="btn" download="Helison-Dias-Currículo">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
