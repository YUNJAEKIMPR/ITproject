import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <br />
      <div>
        <section>
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <MainContent />
            </div>
          </div>
        </section>
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
