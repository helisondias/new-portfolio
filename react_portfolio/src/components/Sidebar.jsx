import Avatar from "../img/eu.png";
import SocialNetworks from "./SocialNetworks";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Helison Dias" />
      <p className="title">Desenvolvedor Junior</p>
      <SocialNetworks />
      <InformationContainer />

      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
