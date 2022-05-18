import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/home/MainContent";
import Sidebar from "./components/home/Sidebar";

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
