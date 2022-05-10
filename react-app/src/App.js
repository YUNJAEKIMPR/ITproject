import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
