import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/components/app.sass";


function App() {
  return (
    <div id="portfolio" className="container1">
      <h1>Helison Dias</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
